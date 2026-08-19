import { Cli } from "./cli.ts";
import { Git } from "./git.ts";
import { Grep } from "./grep.ts";
import { LeftOverBits } from "./leftoverbits.ts";
import { Report } from "./report.ts";
import { Scanner } from "./scanner.ts";

const MARKERS_OUT = "WhatToGit.md";
const LEFTOVERBITS_OUT = "leftOverBits.md";

try {
    const git = new Git(Cli.parseArgs());
    const markers = await new Scanner(git, new Grep(git)).scan();
    const markdown = new Report(markers, await git.info()).toMarkdown();
    const leftOverBits = new LeftOverBits(LEFTOVERBITS_OUT);

    await leftOverBits.writeLeftOverBits();
    await Deno.writeTextFile(MARKERS_OUT, markdown);
} catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
    Deno.exit(1);
}
