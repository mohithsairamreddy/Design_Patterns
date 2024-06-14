import { Command } from './Command';
import { Player } from './Player';
import { Enemy } from './Enemy';

export class FireWeaponCommand implements Command {
  constructor(private player: Player, private target: Enemy) {}

  execute(): void {
    this.target.health -= this.player.damage;
    console.log(`Player attacked ${this.target.name} for ${this.player.damage} damage`);
  }

  undo(): void {
    this.target.health += this.player.damage;
    console.log(`Player attack on ${this.target.name} undone`);
  }
}
