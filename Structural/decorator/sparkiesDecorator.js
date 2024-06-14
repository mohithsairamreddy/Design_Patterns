"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SparkiesDecorator = void 0;
const LearnDecorator_1 = require("./LearnDecorator");
class SparkiesDecorator extends LearnDecorator_1.LearnDecorator {
    learn() {
        super.learn();
        this.addSparkies();
    }
    addSparkies() {
        console.log("Sparkies (stars) added on each correct answer...");
    }
}
exports.SparkiesDecorator = SparkiesDecorator;
