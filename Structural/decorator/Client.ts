import { ChildLearn } from './LearningMode';
import { BasicLearning } from './basicLearning';
import { AI_DoubtSolvingDecorator } from './aiDoubtSolvingDecorator';
import { GamesDecorator } from './gamesDecorator';
import { SparkiesDecorator } from './sparkiesDecorator';

let childLearning: ChildLearn = new BasicLearning();
childLearning = new AI_DoubtSolvingDecorator(childLearning);
childLearning = new GamesDecorator(childLearning);
childLearning = new SparkiesDecorator(childLearning);

childLearning.learn();
