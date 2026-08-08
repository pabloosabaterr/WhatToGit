import type { Git } from "./git.ts";

export const KEYWORDS = ["TODO", "NEEDSWORK", "FIXME", "XXX"];

export interface GrepHit {
    file: string;
    line: number;
    text: string;
}

export class Grep {
    constructor(
        private readonly git: Git,
    ) {}

    private parseOutput(output: string): GrepHit | null {
        const nul = output.indexOf("\0");
        if (nul < 0) {
            return null;
        }

        const file = output.slice(0, nul);
        const rest = output.slice(nul + 1);

        const sep = rest.search(/[\0:]/);
        if (sep < 0) return null;

        const line = Number(rest.slice(0, sep));
        if (!Number.isInteger(line) || line <= 0) return null;

        return { file, line, text: rest.slice(sep + 1).trim() };
    }

    async find(): Promise<Map<string, Map<number, string>>> {
        const { code, stdout, stderr } = await this.git.doCommand(
            "grep -z -nIw -E",
            KEYWORDS.join("|"),
        );
        if (code > 1) {
            throw new Error(`git grep failed (${code}): ${stderr.trim()}`);
        }

        const hits = new Map<string, Map<number, string>>();

        for (const record of stdout.split("\n")) {
            const hit = this.parseOutput(record);
            if (!hit) {
                continue;
            }

            let lines = hits.get(hit.file);
            if (!lines) {
                hits.set(hit.file, lines = new Map());
            }

            lines.set(hit.line, hit.text);
        }

        return hits;
    }
}
