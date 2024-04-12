
import { ConfigurationMemento } from './ConfigurationMemento';

export class ConfigurationOriginator {
    private height: number;
    private width: number;

    constructor(height: number, width: number) {
        this.height = height;
        this.width = width;
    }

    setHeight(height: number): void {
        this.height = height;
    }

    setWidth(width: number): void {
        this.width = width;
    }

    createMemento(): ConfigurationMemento {
        return new ConfigurationMemento(this.height, this.width);
    }

    getHeight(): number {
        return this.height;
    }

    getWidth(): number {
        return this.width;
    }

    restoreMemento(mementoToBeRestored: ConfigurationMemento): void {
        this.height = mementoToBeRestored.getHeight();
        this.width = mementoToBeRestored.getWidth();
    }
}
