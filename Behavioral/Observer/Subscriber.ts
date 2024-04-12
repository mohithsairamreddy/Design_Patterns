import { Observer } from './Observer';

class Subscriber implements Observer {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    update(video: string): void {
        console.log(`${this.name} received notification: New video uploaded - ${video}`);
    }
}

export { Subscriber };
