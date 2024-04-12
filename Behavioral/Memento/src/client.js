"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
// Client.ts
var ConfigurationOriginator_1 = require("./ConfigurationOriginator");
var ConfigurationCareTaker_1 = require("./ConfigurationCareTaker");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.main = function (args) {
        var careTakerObject = new ConfigurationCareTaker_1.ConfigurationCareTaker();
        var originatorObject = new ConfigurationOriginator_1.ConfigurationOriginator(5, 10);
        var snapshot1 = originatorObject.createMemento();
        careTakerObject.addMemento(snapshot1);
        originatorObject.setHeight(7);
        originatorObject.setWidth(12);
        var snapshot2 = originatorObject.createMemento();
        careTakerObject.addMemento(snapshot2);
        originatorObject.setHeight(9);
        originatorObject.setWidth(14);
        var restoredStateMementoObj = careTakerObject.undo();
        if (restoredStateMementoObj !== null) {
            originatorObject.restoreMemento(restoredStateMementoObj);
            console.log("Height: ".concat(originatorObject.getHeight(), ", Width: ").concat(originatorObject.getWidth()));
        }
        else {
            console.log("No state to restore");
        }
    };
    return Client;
}());
exports.Client = Client;
// Running the main function
Client.main([]);
