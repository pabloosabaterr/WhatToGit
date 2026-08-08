import { BlameLine } from "./blameline.ts";
import type { Git } from "./git.ts";

export class Blame {
    private readonly HEADER = /^([0-9a-f]{40,64}) \d+ (\d+)(?: \d+)?$/;
    private readonly RANGES_PER_CALL = 200;

    constructor(private readonly git: Git) {}

    private parsePorcelain(stdout: string): Map<number, BlameLine> {
        const res = new Map<number, BlameLine>();
        let line: number | null = null;
        let commit: string = "";
        let author: string = "";
        let time: number = 0;
        let tz: string = "+0000";

        for (const raw of stdout.split("\n")) {
            const header = this.HEADER.exec(raw);
            if (header) {
                commit = header[1]!.slice(0, 8);
                line = Number(header[2]);
            } else if (raw.startsWith("author ")) {
                author = raw.slice("author ".length);
            } else if (raw.startsWith("author-time ")) {
                time = Number(raw.slice("author-time ".length));
            } else if (raw.startsWith("author-tz ")) {
                tz = raw.slice("author-tz ".length);
            } else if (raw.startsWith("\t") && line !== null) {
                res.set(line, new BlameLine(commit, author, time, tz));
                line = null;
            }
        }
        return res;
    }

    async forLines(path: string, lineNumbers: number[]): Promise<Map<number, BlameLine>> {
        const res = new Map<number, BlameLine>();

        for (let i = 0; i < lineNumbers.length; i += this.RANGES_PER_CALL) {
            const ranges: string[] = [];
            for (const n of lineNumbers.slice(i, i + this.RANGES_PER_CALL)) {
                ranges.push("-L", `${n},${n}`);
            }

            const { code, stdout, stderr } = await this.git.doCommand(
                "blame -w --line-porcelain",
                ...ranges,
                "--",
                path,
            );
            if (code !== 0) {
                throw new Error(`git blame ${path} failed (${code}): ${stderr.trim()}`);
            }

            for (const [line, blame] of this.parsePorcelain(stdout)) {
                res.set(line, blame);
            }
        }
        return res;
    }
}
