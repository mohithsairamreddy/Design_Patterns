"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigurationMemento = void 0;
class ConfigurationMemento {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    getHeight() {
        return this.height;
    }
    getWidth() {
        return this.width;
    }
}
exports.ConfigurationMemento = ConfigurationMemento;
