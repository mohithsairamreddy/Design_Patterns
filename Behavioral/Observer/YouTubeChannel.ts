import { Subject } from './Subject';
import { Observer } from './Observer';

class YouTubeChannel implements Subject {
    private subscribers: Observer[] = [];

    subscribe(observer: Observer): void {
        this.subscribers.push(observer);
    }

    unsubscribe(observer: Observer): void {
        const index = this.subscribers.indexOf(observer);
        if (index !== -1) {
            this.subscribers.splice(index, 1);
        }
    }

    notify(video: string): void {
        this.subscribers.forEach((subscriber) => subscriber.update(video));
    }

    uploadVideo(video: string): void {
        console.log(`New video uploaded: ${video}`);
        this.notify(video);
    }
}

export { YouTubeChannel };
