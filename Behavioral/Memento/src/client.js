"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
// Client.ts
const ConfigurationOriginator_1 = require("./ConfigurationOriginator");
const ConfigurationCareTaker_1 = require("./ConfigurationCareTaker");
class Client {
    static main(args) {
        const careTakerObject = new ConfigurationCareTaker_1.ConfigurationCareTaker();
        const originatorObject = new ConfigurationOriginator_1.ConfigurationOriginator(5, 10);
        const snapshot1 = originatorObject.createMemento();
        careTakerObject.addMemento(snapshot1);
        originatorObject.setHeight(7);
        originatorObject.setWidth(12);
        const snapshot2 = originatorObject.createMemento();
        careTakerObject.addMemento(snapshot2);
        originatorObject.setHeight(9);
        originatorObject.setWidth(14);
        const restoredStateMementoObj = careTakerObject.undo();
        if (restoredStateMementoObj !== null) {
            originatorObject.restoreMemento(restoredStateMementoObj);
            console.log(`Height: ${originatorObject.getHeight()}, Width: ${originatorObject.getWidth()}`);
        }
        else {
            console.log("No state to restore");
        }
    }
}
exports.Client = Client;
// Running the main function
Client.main([]);
