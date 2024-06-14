"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GamesDecorator = void 0;
const LearnDecorator_1 = require("./LearnDecorator");
class GamesDecorator extends LearnDecorator_1.LearnDecorator {
    learn() {
        super.learn();
        this.playGames();
    }
    playGames() {
        console.log("Games added for learning fun...");
    }
}
exports.GamesDecorator = GamesDecorator;
