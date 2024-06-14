import { Collection } from './Collection';
import { Email } from './Email';
import { EmailIterator } from './EmailIterator';

export class EmailRepository implements Collection<Email> {
    private emails: Email[];

    constructor(emails: Email[]) {
        this.emails = emails;
    }

    createIterator(sortBy: 'timestamp' | 'priority'): Iterator<Email> {
        return new EmailIterator(this.emails, sortBy);
    }
}
