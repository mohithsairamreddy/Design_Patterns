"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const basicLearning_1 = require("./basicLearning");
const aiDoubtSolvingDecorator_1 = require("./aiDoubtSolvingDecorator");
const gamesDecorator_1 = require("./gamesDecorator");
const sparkiesDecorator_1 = require("./sparkiesDecorator");
let childLearning = new basicLearning_1.BasicLearning();
childLearning = new aiDoubtSolvingDecorator_1.AI_DoubtSolvingDecorator(childLearning);
childLearning = new gamesDecorator_1.GamesDecorator(childLearning);
childLearning = new sparkiesDecorator_1.SparkiesDecorator(childLearning);
childLearning.learn();
