"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigurationCareTaker = void 0;
class ConfigurationCareTaker {
    constructor() {
        this.history = [];
    }
    addMemento(memento) {
        this.history.push(memento);
    }
    undo() {
        if (this.history.length > 0) {
            const lastMementoIndex = this.history.length - 1;
            const lastMemento = this.history[lastMementoIndex];
            this.history.splice(lastMementoIndex, 1);
            return lastMemento;
        }
        return null;
    }
}
exports.ConfigurationCareTaker = ConfigurationCareTaker;
