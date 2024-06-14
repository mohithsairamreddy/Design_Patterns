"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Player_1 = require("./Player");
var Enemy_1 = require("./Enemy");
var GameEngine_1 = require("./GameEngine");
var MovePlayerCommand_1 = require("./MovePlayerCommand");
var FireWeaponCommand_1 = require("./FireWeaponCommand");
var player = new Player_1.Player(100, 10, 0, 0);
var enemy = new Enemy_1.Enemy("Goblin", 50);
var gameEngine = new GameEngine_1.GameEngine();
var moveCommand = new MovePlayerCommand_1.MovePlayerCommand(player, 5, 10);
gameEngine.executeCommand(moveCommand);
var attackCommand = new FireWeaponCommand_1.FireWeaponCommand(player, enemy);
gameEngine.executeCommand(attackCommand);
gameEngine.undoCommand(); // Undo attack
gameEngine.undoCommand(); // Undo move
gameEngine.redoCommand(); // Redo move
gameEngine.redoCommand(); // Redo attack
