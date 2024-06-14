import { Expression } from "./Expression";
import { Context } from "./Context";

export class TerminalExpression implements Expression {
    interpret(context: Context): boolean | Date {
        const datePattern = /^\d{2}-\d{2}-\d{2}$/;
        if (datePattern.test(context.getInput())) {
            const [day, month, year] = context.getInput().split('-').map(Number);
            return new Date(2000 + year, month - 1, day); 
        }
        return false;
    }
}