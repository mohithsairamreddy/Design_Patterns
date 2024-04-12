import { YouTubeChannel } from './YouTubeChannel';
import { Subscriber } from './Subscriber';

// Create YouTube channel
const myChannel = new YouTubeChannel();

// Create subscribers
const subscriber1 = new Subscriber('Alice');
const subscriber2 = new Subscriber('Bob');
const subscriber3 = new Subscriber('Charlie');

// Subscribing observers to the subject (YouTube channel)
myChannel.subscribe(subscriber1);
myChannel.subscribe(subscriber2);
myChannel.subscribe(subscriber3);

// Upload a new video
myChannel.uploadVideo('Design Patterns Explained');

// Unsubscribe one observer
myChannel.unsubscribe(subscriber3);

// Upload another video
myChannel.uploadVideo('Typescript Tutorial');
