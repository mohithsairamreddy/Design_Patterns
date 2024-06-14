"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DataMiner_1 = __importDefault(require("./DataMiner"));
class DocDataMiner extends DataMiner_1.default {
    openFile(path) {
        console.log(`Opening DOC file: ${path}`);
    }
    extractData() {
        console.log("Extracting data from DOC file");
    }
    closeFile() {
        console.log("Closing DOC file");
    }
    parseData() {
        console.log("Parsing data from DOC file");
    }
}
exports.default = DocDataMiner;
