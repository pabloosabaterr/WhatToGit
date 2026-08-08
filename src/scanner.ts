import { Blame } from "./blame.ts";
import type { Git } from "./git.ts";
import type { Grep } from "./grep.ts";
import { Marker } from "./marker.ts";

export class Scanner {
    private readonly blame: Blame;

    constructor(
        private readonly git: Git,
        private readonly grep: Grep,
    ) {
        this.blame = new Blame(this.git);
    }

    async scan(): Promise<Marker[]> {
        const hits: Map<string, Map<number, string>> = await this.grep.find();
        const markers: Marker[] = [];

        for (const file of [...hits.keys()].sort()) {
            const lines = hits.get(file)!;
            const numbers = [...lines.keys()].sort((a, b) => a - b);
            const blamed = await this.blame.forLines(file, numbers);

            for (const line of numbers) {
                markers.push(new Marker(file, line, lines.get(line)!, blamed.get(line) ?? null));
            }
        }

        return markers;
    }
}
