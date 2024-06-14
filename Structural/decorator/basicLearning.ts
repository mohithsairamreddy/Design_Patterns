import { LearningMode } from './LearningMode';

export class BasicLearning implements LearningMode {
    learn(): void {
        console.log("Basic learning in progress...");
    }
}
