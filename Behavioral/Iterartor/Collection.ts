// Collection.ts
import { Iterator } from './Iterator';

export interface Collection<T> {
    createIterator(sortBy: 'timestamp' | 'priority'): Iterator<T>;
}
