"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovePlayerCommand = void 0;
var MovePlayerCommand = /** @class */ (function () {
    function MovePlayerCommand(player, newX, newY) {
        this.player = player;
        this.newX = newX;
        this.newY = newY;
        this.prevX = player.x;
        this.prevY = player.y;
    }
    MovePlayerCommand.prototype.execute = function () {
        this.player.x = this.newX;
        this.player.y = this.newY;
        console.log("Player moved to (".concat(this.newX, ", ").concat(this.newY, ")"));
    };
    MovePlayerCommand.prototype.undo = function () {
        this.player.x = this.prevX;
        this.player.y = this.prevY;
        console.log("Player move undone to (".concat(this.prevX, ", ").concat(this.prevY, ")"));
    };
    return MovePlayerCommand;
}());
exports.MovePlayerCommand = MovePlayerCommand;
