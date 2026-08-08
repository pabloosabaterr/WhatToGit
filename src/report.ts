import type { RepoInfo } from "./git.ts";
import { Marker } from "./marker.ts";

/** Renders a set of markers as the generated MARKERS.md. */
export class Report {
    constructor(
        private readonly markers: Marker[],
        private readonly repo: RepoInfo,
        private readonly today = new Date().toISOString().slice(0, 10),
    ) {}

    toMarkdown(): string {
        const body = [
            ...this.preamble(),
            ...this.section("Count by marker", ["Marker", "Count"], this.byKeyword()),
            ...this.section(
                "Count by top-level directory",
                ["Directory", "Count"],
                this.byDirectory(),
            ),
            ...this.section("Count by year of last modification", ["Year", "Count"], this.byYear()),
            ...this.listing(),
        ];
        return body.join("\n").replace(/\s+$/, "") + "\n";
    }

    private preamble(): string[] {
        return [
            `# ${Marker.KEYWORDS.join(" / ")} markers in ${this.repo.name}`,
            "",
            `${this.markers.length} lines in total, at HEAD \`${this.repo.head.slice(0, 8)}\` ` +
            `(${this.repo.version}). Collected on ${this.today}.`,
            "",
            "Dates come from `git blame -w` and refer to the last time the line was " +
            "touched, which is not necessarily when the marker was added.",
            "",
            `Links point at the tip of \`${Marker.REF}\` on GitHub, so line numbers may drift ` +
            "as that branch moves ahead of the commit scanned here.",
            "",
            "This file is generated. Run `deno task report` to rebuild it; do not edit it by hand.",
            "",
        ];
    }

    private section(title: string, headers: string[], rows: [string, number][]): string[] {
        return [`## ${title}`, "", ...Report.table(headers, rows)];
    }

    private static table(headers: string[], rows: [string, number][]): string[] {
        if (rows.length === 0) return ["_(none)_", ""];
        return [
            `| ${headers.join(" | ")} |`,
            `|${" --- |".repeat(headers.length)}`,
            ...rows.map(([label, count]) => `| ${label} | ${count} |`),
            "",
        ];
    }

    private byKeyword(): [string, number][] {
        return Marker.KEYWORDS.map((keyword) => [
            keyword,
            this.markers.filter((marker) => marker.mentions(keyword)).length,
        ]);
    }

    private byDirectory(): [string, number][] {
        return Report.tally(this.markers, (marker) => marker.directory);
    }

    private byYear(): [string, number][] {
        return Report.tally(this.markers, (marker) => marker.year);
    }

    private static tally(markers: Marker[], key: (m: Marker) => string | null): [string, number][] {
        const counts = new Map<string, number>();
        for (const marker of markers) {
            const k = key(marker);
            if (k !== null) counts.set(k, (counts.get(k) ?? 0) + 1);
        }
        return [...counts].sort(([a], [b]) => a.localeCompare(b));
    }

    private listing(): string[] {
        const out = ["## Full listing", ""];

        const grouped = new Map<string, Map<string, Marker[]>>();
        for (const marker of this.markers) {
            let files = grouped.get(marker.directory);
            if (!files) grouped.set(marker.directory, files = new Map());

            let entries = files.get(marker.file);
            if (!entries) files.set(marker.file, entries = []);
            entries.push(marker);
        }

        for (const directory of [...grouped.keys()].sort()) {
            const files = grouped.get(directory)!;
            const total = [...files.values()].reduce((sum, entries) => sum + entries.length, 0);

            out.push(
                "<details>",
                `<summary><b>${directory}</b> &mdash; ${total} markers</summary>`,
                "",
            );

            for (const file of [...files.keys()].sort()) {
                const entries = files.get(file)!.sort((a, b) => a.line - b.line);
                out.push(`\`${file}\` (${entries.length})`, "");

                for (const marker of entries) {
                    out.push(
                        `- ${marker.date} \`${marker.commit}\` ` +
                            `[L${marker.line}](${marker.url}) \`${marker.summary}\``,
                    );
                }
                out.push("");
            }
            out.push("</details>", "");
        }
        return out;
    }
}
