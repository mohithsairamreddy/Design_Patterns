"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const YouTubeChannel_1 = require("./YouTubeChannel");
const Subscriber_1 = require("./Subscriber");
// Create YouTube channel
const myChannel = new YouTubeChannel_1.YouTubeChannel();
// Create subscribers
const subscriber1 = new Subscriber_1.Subscriber('Alice');
const subscriber2 = new Subscriber_1.Subscriber('Bob');
const subscriber3 = new Subscriber_1.Subscriber('Charlie');
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
