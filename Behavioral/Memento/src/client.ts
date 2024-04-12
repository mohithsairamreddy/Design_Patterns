// Client.ts
import { ConfigurationOriginator } from './ConfigurationOriginator';
import { ConfigurationCareTaker } from './ConfigurationCareTaker';

export class Client {
    static main(args: string[]): void {
        const careTakerObject = new ConfigurationCareTaker();
        
        const originatorObject = new ConfigurationOriginator(5, 10);
        
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
        } else {
            console.log("No state to restore");
        }
    }
}

// Running the main function
Client.main([]);
