export class Cli {
    static parseArgs(): string {
        const [path = "."]: string[] = Deno.args;

        return path;
    }
}
