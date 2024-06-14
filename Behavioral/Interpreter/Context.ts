export class Context {
    private input: string;

    constructor(input: string) {
        this.input = input;
    }

    getInput(): string {
        return this.input;
    }
}