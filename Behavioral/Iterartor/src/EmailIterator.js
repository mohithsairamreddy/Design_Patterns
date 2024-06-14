"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailIterator = void 0;
class EmailIterator {
    constructor(emails, sortBy) {
        this.position = 0;
        this.emails = emails;
        this.sortBy = sortBy;
        this.sortEmails();
    }
    sortEmails() {
        if (this.sortBy === 'timestamp') {
            this.emails.sort((a, b) => a.timestamp - b.timestamp);
        }
        else if (this.sortBy === 'priority') {
            this.emails.sort((a, b) => b.priority - a.priority);
        }
    }
    hasNext() {
        return this.position < this.emails.length;
    }
    next() {
        return this.emails[this.position++];
    }
}
exports.EmailIterator = EmailIterator;
