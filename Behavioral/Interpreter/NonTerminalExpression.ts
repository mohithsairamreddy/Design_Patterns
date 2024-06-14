import { Expression } from "./Expression";
import { Context } from "./Context";

export class NonTerminalExpression implements Expression {
    interpret(context: Context): boolean | Date {
        return false;
    }
}