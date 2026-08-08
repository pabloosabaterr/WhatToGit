const decoder = new TextDecoder("utf-8");

export interface CommandResult {
    code: number;
    stdout: string;
    stderr: string;
}

export interface RepoInfo {
    name: string;
    head: string;
    version: string;
}

export class Git {
    constructor(private gitPath: string) {
        this.open(gitPath);
    }

    private open(path: string): string {
        if (path === "~" || path.startsWith("~/")) {
            path = (Deno.env.get("HOME") ?? "~") + path.slice(1);
        }

        return this.gitPath = path;
    }

    async doCommand(command: string, ...extra: string[]): Promise<CommandResult> {
        const args = ["-C", this.gitPath, ...command.split(" ").filter(Boolean), ...extra];

        const { code, stdout, stderr }: Deno.CommandOutput = await new Deno.Command("git", {
            args: args,
        }).output();

        return { code, stdout: decoder.decode(stdout), stderr: decoder.decode(stderr) };
    }

    private async line(command: string): Promise<string> {
        const { code, stdout, stderr } = await this.doCommand(command);
        if (code !== 0) {
            throw new Error(`git ${command} failed (${code}): ${stderr.trim()}`);
        }

        return stdout.trim();
    }

    async info(): Promise<RepoInfo> {
        const toplevel = await this.line("rev-parse --show-toplevel");

        return {
            name: toplevel.split("/").filter(Boolean).pop() ?? toplevel,
            head: await this.line("rev-parse HEAD"),
            version: await this.line("describe --tags --always"),
        };
    }
}
