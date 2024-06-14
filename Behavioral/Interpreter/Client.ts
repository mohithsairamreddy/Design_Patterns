import { Context } from "./Context";
import { TerminalExpression } from "./TerminalExpression";

const context = new Context("01-06-24");
const terminalExpression = new TerminalExpression();

const result = terminalExpression.interpret(context);

if (result instanceof Date) {
    console.log("Interpreted date:", result.toDateString());
} else {
    console.log("Invalid date format.");
}