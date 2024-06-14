"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Client.ts
const Email_1 = require("./Email");
const EmailRepository_1 = require("./EmailRepository");
function generateRandomTimestamp() {
    const now = Date.now();
    const thirtyDaysInMilliseconds = 30 * 24 * 60 * 60 * 1000;
    return now - Math.floor(Math.random() * thirtyDaysInMilliseconds);
}
const emails = [
    new Email_1.Email('Meeting Tomorrow', 'Don\'t forget about the meeting tomorrow at 10am.', generateRandomTimestamp(), 2),
    new Email_1.Email('Project Update', 'The project is on track for the deadline next week.', generateRandomTimestamp(), 1),
    new Email_1.Email('Urgent: Server Down', 'The main server is down. Immediate action required.', generateRandomTimestamp(), 3),
    new Email_1.Email('Weekly Newsletter', 'Here is your weekly newsletter.', generateRandomTimestamp(), 1),
    new Email_1.Email('Follow-Up on Invoice', 'Please follow up on the invoice sent last week.', generateRandomTimestamp(), 2),
];
const emailRepository = new EmailRepository_1.EmailRepository(emails);
// Iterating emails by timestamp
let iterator = emailRepository.createIterator('timestamp');
console.log('Emails sorted by timestamp:');
while (iterator.hasNext()) {
    const email = iterator.next();
    console.log(`Subject: ${email.subject}, Timestamp: ${new Date(email.timestamp).toLocaleString()}`);
}
// Iterating emails by priority
iterator = emailRepository.createIterator('priority');
console.log('Emails sorted by priority:');
while (iterator.hasNext()) {
    const email = iterator.next();
    console.log(`Subject: ${email.subject}, Priority: ${email.priority}`);
}
