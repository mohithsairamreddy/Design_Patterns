// Email.ts
export class Email {
    constructor(
        public subject: string,
        public body: string,
        public timestamp: number,
        public priority: number 
    ) {}
}
