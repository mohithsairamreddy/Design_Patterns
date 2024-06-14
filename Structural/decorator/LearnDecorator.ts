import { LearningMode } from './LearningMode';

export abstract class LearnDecorator implements LearningMode {
    protected learnComponent: LearningMode;

    constructor(learnComponent: LearningMode) {
        this.learnComponent = learnComponent;
    }

    learn(): void {
        this.learnComponent.learn();
    }
}
