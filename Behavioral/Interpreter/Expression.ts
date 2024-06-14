export interface Expression {
    interpret(context: Context): boolean | Date;
}