"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
// Email.ts
class Email {
    constructor(subject, body, timestamp, priority) {
        this.subject = subject;
        this.body = body;
        this.timestamp = timestamp;
        this.priority = priority;
    }
}
exports.Email = Email;
