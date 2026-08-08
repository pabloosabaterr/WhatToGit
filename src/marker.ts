import type { BlameLine } from "./blameline.ts";
import { KEYWORDS } from "./grep.ts";

const GITHUB = "https://github.com/git/git/blob";
const REF = "master";

export class Marker {
    static readonly KEYWORDS = KEYWORDS;
    static readonly REF = REF;

    constructor(
        readonly file: string,
        readonly line: number,
        readonly text: string,
        private readonly blame: BlameLine | null,
    ) {}

    get commit(): string {
        return this.blame?.commit ?? "";
    }

    get author(): string {
        return this.blame?.author ?? "";
    }

    get date(): string {
        return this.blame?.date ?? "";
    }

    get year(): string | null {
        return this.date.slice(0, 4) || null;
    }

    get directory(): string {
        const slash = this.file.indexOf("/");
        return slash === -1 ? "(root)" : this.file.slice(0, slash);
    }

    get url(): string {
        return `${GITHUB}/${REF}/${this.file}#L${this.line}`;
    }

    get summary(): string {
        return this.text.slice(0, 70).replaceAll("`", "'");
    }

    mentions(keyword: string): boolean {
        return new RegExp(`\\b${keyword}\\b`).test(this.text);
    }
}
