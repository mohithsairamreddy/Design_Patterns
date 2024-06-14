"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AI_DoubtSolvingDecorator = void 0;
const LearnDecorator_1 = require("./LearnDecorator");
class AI_DoubtSolvingDecorator extends LearnDecorator_1.LearnDecorator {
    learn() {
        super.learn();
        this.solveDoubts();
    }
    solveDoubts() {
        console.log("AI doubt solving activated...");
    }
}
exports.AI_DoubtSolvingDecorator = AI_DoubtSolvingDecorator;
