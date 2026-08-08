const OPEN = "/*";
const CLOSE = "*/";
const MAX_LINES = 14;

/*
 * Expands a single line into the whole comment that contains it.
 * Lines are 1-based throughout, matching git grep and git blame output.
 */
export class Block {
    constructor(private readonly lines: string[]) {}

    /*
     * Gets the full comment surrounding a line, dedented and right-trimmed.
     * Falls back to the line itself when it is not part of any comment.
     *
     * @param {number} line the line holding the marker.
     */
    at(line: number): string[] {
        if (line <= 0 || line > this.lines.length)
            return [];

        const [start, end] = this.blockSpan(line) ?? this.lineSpan(line) ?? [line, line];
        return Block.dedent(this.lines.slice(start - 1, end));
    }

    /*
     * Reads a line, translating from 1-based to the underlying array.
     * The only place that indexes `lines`, so no caller needs a non-null assertion.
     *
     * @param {number} line the line to read.
     */
    private text(line: number): string {
        return this.lines[line - 1] ?? "";
    }

    /*
     * Gets the bounds of the delimited comment containing a line, if any.
     *
     * @param {number} line the line to expand.
     */
    private blockSpan(line: number): [number, number] | null {
        const start = this.up(line);
        if (start === null)
            return null;

        const end = this.down(line);
        return end === null ? null : [start, end];
    }

    /*
     * Goes a given line to get the line at which the comment block starts.
     *
     * @param {number} line the line from where start to go up searching comment opening.
     */
    private up(line: number): number | null {
        for (let i = line; i >= 1 && line - i < MAX_LINES; i--) {
            const l = this.text(i);

            if (i < line && l.lastIndexOf(CLOSE) > l.lastIndexOf(OPEN))
                return null;
            if (l.includes(OPEN))
                return i;
        }

        return null;
    }

    /*
     * Goes down from a given line to get the line at which the comment block ends.
     *
     * @param {number} line the line from where start to go down searching comment closing.
     */
    private down(line: number): number | null {
        for (let i = line; i <= this.lines.length && i - line < MAX_LINES; i++) {
            const l = this.text(i);
            const open = l.indexOf(OPEN);
            const close = l.indexOf(CLOSE);

            if (i > line && open >= 0 && (close < 0 || open < close))
                return null;
            if (close >= 0)
                return i;
        }

        return null;
    }

    /*
     * Gets the bounds of the run of single-line comments containing a line.
     * Only lines sharing the same token are joined.
     *
     * @param {number} line the line to expand.
     */
    private lineSpan(line: number): [number, number] | null {
        const token = this.token(line);
        if (token === null)
            return null;

        let start = line;
        let end = line;
        while (start > 1 && line - start < MAX_LINES && this.token(start - 1) === token)
            start--;
        while (end < this.lines.length && end - line < MAX_LINES && this.token(end + 1) === token)
            end++;

        return [start, end];
    }

    /*
     * Gets the single-line comment token a line starts with, if any.
     *
     * @param {number} line the line to inspect.
     */
    private token(line: number): string | null {
        const text = this.text(line).trimStart();
        if (text.startsWith("//"))
            return "//";

        if (text === "#" || text.startsWith("# ") || text.startsWith("#\t"))
            return "#";

        return null;
    }

    /*
     * Strips the shared leading indentation from a set of lines.
     *
     * Blank lines are ignored when measuring, so they do not force a zero pad.
     *
     * @param {string[]} lines the comment lines to dedent.
     */
    private static dedent(lines: string[]): string[] {
        const indents = lines.filter((l) => l.trim()).map((l) => l.length - l.trimStart().length);
        const pad = indents.length ? Math.min(...indents) : 0;
        return lines.map((l) => l.slice(pad).trimEnd());
    }
}
