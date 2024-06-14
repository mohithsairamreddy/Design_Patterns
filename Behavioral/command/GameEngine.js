"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameEngine = void 0;
var GameEngine = /** @class */ (function () {
    function GameEngine() {
        this.commandHistory = [];
        this.redoStack = [];
    }
    GameEngine.prototype.executeCommand = function (command) {
        command.execute();
        this.commandHistory.push(command);
        this.redoStack = [];
    };
    GameEngine.prototype.undoCommand = function () {
        var lastCommand = this.commandHistory.pop();
        if (!lastCommand) {
            console.log("No commands to undo");
            return;
        }
        lastCommand.undo();
        this.redoStack.push(lastCommand);
    };
    GameEngine.prototype.redoCommand = function () {
        var nextCommand = this.redoStack.pop();
        if (!nextCommand) {
            console.log("No commands to redo");
            return;
        }
        nextCommand.execute();
        this.commandHistory.push(nextCommand);
    };
    return GameEngine;
}());
exports.GameEngine = GameEngine;
