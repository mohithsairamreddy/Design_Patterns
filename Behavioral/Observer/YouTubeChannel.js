"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YouTubeChannel = void 0;
class YouTubeChannel {
    constructor() {
        this.subscribers = [];
    }
    subscribe(observer) {
        this.subscribers.push(observer);
    }
    unsubscribe(observer) {
        const index = this.subscribers.indexOf(observer);
        if (index !== -1) {
            this.subscribers.splice(index, 1);
        }
    }
    notify(video) {
        this.subscribers.forEach((subscriber) => subscriber.update(video));
    }
    uploadVideo(video) {
        console.log(`New video uploaded: ${video}`);
        this.notify(video);
    }
}
exports.YouTubeChannel = YouTubeChannel;
