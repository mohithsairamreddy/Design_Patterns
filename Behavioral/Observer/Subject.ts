import { Observer } from './Observer';
interface Subject {
    subscribe(observer: Observer): void;
    unsubscribe(observer: Observer): void;
    notify(video: string): void;
}
