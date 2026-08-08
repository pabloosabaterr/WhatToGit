export class BlameLine {
    constructor(
        readonly commit: string,
        readonly author: string,
        private readonly time: number,
        private readonly tz: string,
    ) {}

    get date(): string {
        const m = /^([+-])(\d{2})(\d{2})$/.exec(this.tz.trim());
        const minutes = m ? (m[1] === "-" ? -1 : 1) * (Number(m[2]) * 60 + Number(m[3])) : 0;
        return new Date((this.time + minutes * 60) * 1000).toISOString().slice(0, 10);
    }
}
