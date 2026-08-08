import { Blame } from "./blame.ts";
import { Block } from "./block.ts";
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
            const source = new Block(await this.git.fileLines(file));

            for (const line of numbers) {
                const text = lines.get(line)!;
                const block = source.at(line);
                markers.push(
                    new Marker(
                        file,
                        line,
                        text,
                        blamed.get(line) ?? null,
                        block.length > 1 ? block : null,
                    ),
                );
            }
        }

        return markers;
    }
}
