import { Cli } from "./cli.ts";
import { Git } from "./git.ts";
import { Grep } from "./grep.ts";
import { Report } from "./report.ts";
import { Scanner } from "./scanner.ts";

const OUTPUT = "WhatToGit.md";

try {
    const git = new Git(Cli.parseArgs());
    const markers = await new Scanner(git, new Grep(git)).scan();
    const markdown = new Report(markers, await git.info()).toMarkdown();

    await Deno.writeTextFile(OUTPUT, markdown);
    console.log(`${markers.length} markers -> ${OUTPUT}`);
} catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
    Deno.exit(1);
}
