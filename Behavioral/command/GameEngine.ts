import { Command } from './Command';

export class GameEngine {
  private commandHistory: Command[] = [];
  private redoStack: Command[] = [];

  executeCommand(command: Command): void {
    command.execute();
    this.commandHistory.push(command);
    this.redoStack = [];
  }

  undoCommand(): void {
    const lastCommand = this.commandHistory.pop();
    if (!lastCommand) {
      console.log("No commands to undo");
      return;
    }
  
    lastCommand.undo();
    this.redoStack.push(lastCommand);
  }
  

  redoCommand(): void {
    const nextCommand = this.redoStack.pop();
    if (!nextCommand) {
      console.log("No commands to redo");
      return;
    }
  
    nextCommand.execute();
    this.commandHistory.push(nextCommand);
  }
}
  