"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigurationOriginator = void 0;
var ConfigurationMemento_1 = require("./ConfigurationMemento");
var ConfigurationOriginator = /** @class */ (function () {
    function ConfigurationOriginator(height, width) {
        this.height = height;
        this.width = width;
    }
    ConfigurationOriginator.prototype.setHeight = function (height) {
        this.height = height;
    };
    ConfigurationOriginator.prototype.setWidth = function (width) {
        this.width = width;
    };
    ConfigurationOriginator.prototype.createMemento = function () {
        return new ConfigurationMemento_1.ConfigurationMemento(this.height, this.width);
    };
    ConfigurationOriginator.prototype.getHeight = function () {
        return this.height;
    };
    ConfigurationOriginator.prototype.getWidth = function () {
        return this.width;
    };
    ConfigurationOriginator.prototype.restoreMemento = function (mementoToBeRestored) {
        this.height = mementoToBeRestored.getHeight();
        this.width = mementoToBeRestored.getWidth();
    };
    return ConfigurationOriginator;
}());
exports.ConfigurationOriginator = ConfigurationOriginator;
