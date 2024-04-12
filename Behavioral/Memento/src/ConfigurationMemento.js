"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigurationMemento = void 0;
var ConfigurationMemento = /** @class */ (function () {
    function ConfigurationMemento(height, width) {
        this.height = height;
        this.width = width;
    }
    ConfigurationMemento.prototype.getHeight = function () {
        return this.height;
    };
    ConfigurationMemento.prototype.getWidth = function () {
        return this.width;
    };
    return ConfigurationMemento;
}());
exports.ConfigurationMemento = ConfigurationMemento;
