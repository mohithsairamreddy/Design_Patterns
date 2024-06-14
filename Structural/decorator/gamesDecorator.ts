import { LearnDecorator } from './LearnDecorator';

export class GamesDecorator extends LearnDecorator {
    learn(): void {
        super.learn();
        this.playGames();
    }

    private playGames(): void {
        console.log("Games added for learning fun...");
    }
}
