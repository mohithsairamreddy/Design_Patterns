export class ConfigurationMemento {
    private height: number;
    private width: number;

    constructor(height: number, width: number) {
        this.height = height;
        this.width = width;
    }

    getHeight(): number {
        return this.height;
    }

    getWidth(): number {
        return this.width;
    }
}
