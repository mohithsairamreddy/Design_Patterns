"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigurationOriginator = void 0;
const ConfigurationMemento_1 = require("./ConfigurationMemento");
class ConfigurationOriginator {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    setHeight(height) {
        this.height = height;
    }
    setWidth(width) {
        this.width = width;
    }
    createMemento() {
        return new ConfigurationMemento_1.ConfigurationMemento(this.height, this.width);
    }
    getHeight() {
        return this.height;
    }
    getWidth() {
        return this.width;
    }
    restoreMemento(mementoToBeRestored) {
        this.height = mementoToBeRestored.getHeight();
        this.width = mementoToBeRestored.getWidth();
    }
}
exports.ConfigurationOriginator = ConfigurationOriginator;
