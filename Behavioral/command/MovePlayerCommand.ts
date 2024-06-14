import { Command } from './Command';
import { Player } from './Player';

export class MovePlayerCommand implements Command {
  private prevX: number;
  private prevY: number;

  constructor(private player: Player, private newX: number, private newY: number) {
    this.prevX = player.x;
    this.prevY = player.y;
  }

  execute(): void {
    this.player.x = this.newX;
    this.player.y = this.newY;
    console.log(`Player moved to (${this.newX}, ${this.newY})`);
  }

  undo(): void {
    this.player.x = this.prevX;
    this.player.y = this.prevY;
    console.log(`Player move undone to (${this.prevX}, ${this.prevY})`);
  }
}
