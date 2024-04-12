import { ConfigurationMemento } from './ConfigurationMemento';

export class ConfigurationCareTaker {
    private history: ConfigurationMemento[] = [];

    addMemento(memento: ConfigurationMemento): void {
        this.history.push(memento);
    }

    undo(): ConfigurationMemento | null {
        if (this.history.length > 0) {
            const lastMementoIndex = this.history.length - 1;
            const lastMemento = this.history[lastMementoIndex];
            this.history.splice(lastMementoIndex, 1);
            return lastMemento;
        }
        return null;
    }
}
