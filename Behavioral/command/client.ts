import { Player } from './Player';
import { Enemy } from './Enemy';
import { GameEngine } from './GameEngine';
import { MovePlayerCommand } from './MovePlayerCommand';
import { FireWeaponCommand } from './FireWeaponCommand';

const player = new Player(100, 10, 0, 0);
const enemy = new Enemy("Goblin", 50);
const gameEngine = new GameEngine();

const moveCommand = new MovePlayerCommand(player, 5, 10);
gameEngine.executeCommand(moveCommand);

const attackCommand = new FireWeaponCommand(player, enemy);
gameEngine.executeCommand(attackCommand);

gameEngine.undoCommand(); // Undo attack
gameEngine.undoCommand(); // Undo move

gameEngine.redoCommand(); // Redo move
gameEngine.redoCommand(); // Redo attack
