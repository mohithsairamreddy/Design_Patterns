"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailRepository = void 0;
const EmailIterator_1 = require("./EmailIterator");
class EmailRepository {
    constructor(emails) {
        this.emails = emails;
    }
    createIterator(sortBy) {
        return new EmailIterator_1.EmailIterator(this.emails, sortBy);
    }
}
exports.EmailRepository = EmailRepository;
