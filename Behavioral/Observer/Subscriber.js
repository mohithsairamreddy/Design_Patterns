"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscriber = void 0;
class Subscriber {
    constructor(name) {
        this.name = name;
    }
    update(video) {
        console.log(`${this.name} received notification: New video uploaded - ${video}`);
    }
}
exports.Subscriber = Subscriber;
