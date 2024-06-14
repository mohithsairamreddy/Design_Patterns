"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FireWeaponCommand = void 0;
var FireWeaponCommand = /** @class */ (function () {
    function FireWeaponCommand(player, target) {
        this.player = player;
        this.target = target;
    }
    FireWeaponCommand.prototype.execute = function () {
        this.target.health -= this.player.damage;
        console.log("Player attacked ".concat(this.target.name, " for ").concat(this.player.damage, " damage"));
    };
    FireWeaponCommand.prototype.undo = function () {
        this.target.health += this.player.damage;
        console.log("Player attack on ".concat(this.target.name, " undone"));
    };
    return FireWeaponCommand;
}());
exports.FireWeaponCommand = FireWeaponCommand;
