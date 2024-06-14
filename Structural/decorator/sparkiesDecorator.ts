import { LearnDecorator } from './LearnDecorator';

export class SparkiesDecorator extends LearnDecorator {
    learn(): void {
        super.learn();
        this.addSparkies();
    }

    private addSparkies(): void {
        console.log("Sparkies (stars) added on each correct answer...");
    }
}
