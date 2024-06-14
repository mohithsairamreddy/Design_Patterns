"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LearnDecorator = void 0;
class LearnDecorator {
    constructor(learnComponent) {
        this.learnComponent = learnComponent;
    }
    learn() {
        this.learnComponent.learn();
    }
}
exports.LearnDecorator = LearnDecorator;
