import { LearnDecorator } from './LearnDecorator';

export class AI_DoubtSolvingDecorator extends LearnDecorator {
    learn(): void {
        super.learn();
        this.solveDoubts();
    }

    private solveDoubts(): void {
        console.log("AI doubt solving activated...");
    }
}
