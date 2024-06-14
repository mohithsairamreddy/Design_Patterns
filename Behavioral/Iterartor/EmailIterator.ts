import { Iterator } from './Iterator';
import { Email } from './Email';

export class EmailIterator implements Iterator<Email> {
    private emails: Email[];
    private position: number = 0;
    private sortBy: 'timestamp' | 'priority';

    constructor(emails: Email[], sortBy: 'timestamp' | 'priority') {
        this.emails = emails;
        this.sortBy = sortBy;
        this.sortEmails();
    }
    private sortEmails(): void {
        if (this.sortBy === 'timestamp') {
            this.emails.sort((a, b) => a.timestamp - b.timestamp);
        } else if (this.sortBy === 'priority') {
            this.emails.sort((a, b) => b.priority - a.priority);
        }
    }

    hasNext(): boolean {
        return this.position < this.emails.length;
    }

    next(): Email {
        return this.emails[this.position++];
    }
}
