const LORE_URL: string = "https://lore.kernel.org/git/?q=nq:leftoverbits&x=m";
const NOTE: string = [
    "> [!IMPORTANT]",
    "> Note that links even in the clean section may already have been done. Clean links have gone",
    "> through only a simple filter that searches for any message sent to the mailing list containing",
    "> them (the link to the message that contains the #leftoverbits).",
    ">",
    "> Links in both sections may not be actual #leftoverbits, but rather the patches that solve",
    "> them. Duplicates are also possible, since the \"#leftoverbits\" mark gets dragged along",
    "> through reroll series.",
    ">",
    "> That said, proceed with caution when deciding to go forward with a #leftoverbits: do your own",
    "> search and verify that it has not been done yet. Good luck.",
    ">",
    "> Any help to improve the filter is welcome!",
].join("\n");

const GENERAL_NOTE: string = [
    "> [!NOTE]",
    "> Links already come in descending order: newer #leftoverbits are listed first.",
].join("\n");

const DIRTY_NOTE: string = [
    "> [!WARNING]",
    "> Being marked dirty doesn't mean this #leftoverbits has been solved. It means something or",
    "> someone has mentioned the message the #leftoverbits comes from. That said, there is a higher",
    "> chance of it having been completed already.",
].join("\n");

class EmptyBody extends Error {}

export class LeftOverBits {
    constructor(private readonly file: string) {}

    /*
     * Fetches from the mailing list and returns the mbox as a string
     */
    private async fetchLore(url: string): Promise<string> {
        const res: Response = await fetch(url, {
            method: "POST",
            body: "",
            headers: { "user-agent": "WhatToGit/1" },
        });
        if (res.status === 404) throw new EmptyBody(url);
        if (!res.ok) throw new Error(`lore returned ${res.status} for ${url}`);

        return await new Response(res.body!.pipeThrough(new DecompressionStream("gzip"))).text();
    }

    async writeLeftOverBits(): Promise<void> {
        const cleanBits: string[] = [NOTE, "", GENERAL_NOTE, "", "# Clean #leftoverbits", ""];
        const dirtyBits: string[] = ["", "# Dirty #leftoverbits", "", DIRTY_NOTE, ""];
        const mbox = await this.fetchLore(LORE_URL);
        const messages = mbox.split(/\n(?=From )/).filter((m) => m.trim() !== "");

        for (const message of messages) {
            /*
             * Lore returns 503 if we send too fast too many requests.
             */
            await new Promise((r) => setTimeout(r, 80));

            const headers = message.slice(0, message.indexOf("\n\n")).replace(/\n[ \t]+/g, " ");
            const id = /^message-id:\s*<(.+?)>/im.exec(headers)?.[1];
            if (!id) {
                continue;
            }

            const link: string = `https://lore.kernel.org/git/${id}/`;

            try {
                const q = encodeURIComponent(`b:"${id}"`);
                await this.fetchLore(`https://lore.kernel.org/git/?q=${q}&x=m`);
            } catch (e: unknown) {
                if (!(e instanceof EmptyBody)) throw e;
                cleanBits.push(`- ${link}`);
                continue;
            }

            dirtyBits.push(`- ${link}`);
        }

        await Deno.writeTextFile(this.file, [...cleanBits, ...dirtyBits].join("\n") + "\n");
    }
}
