"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigurationCareTaker = void 0;
var ConfigurationCareTaker = /** @class */ (function () {
    function ConfigurationCareTaker() {
        this.history = [];
    }
    ConfigurationCareTaker.prototype.addMemento = function (memento) {
        this.history.push(memento);
    };
    ConfigurationCareTaker.prototype.undo = function () {
        if (this.history.length > 0) {
            var lastMementoIndex = this.history.length - 1;
            var lastMemento = this.history[lastMementoIndex];
            this.history.splice(lastMementoIndex, 1);
            return lastMemento;
        }
        return null;
    };
    return ConfigurationCareTaker;
}());
exports.ConfigurationCareTaker = ConfigurationCareTaker;
