export class Cli {
    static parseArgs(): string {
        /*
         * Because there's only one arg that we want lets hardcode it to be the first.
         */
        const path: string[] = Deno.args;

        if(path.length > 1)
            throw new Error("Only path is expected as arg");

        if (!path[0])
            throw new Error("Please specify git clone path");

        return path[0];
    }
}
