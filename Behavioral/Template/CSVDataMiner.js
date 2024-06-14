"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DataMiner_1 = __importDefault(require("./DataMiner"));
class CSVDataMiner extends DataMiner_1.default {
    openFile(path) {
        console.log(`Opening CSV file: ${path}`);
    }
    extractData() {
        console.log("Extracting data from CSV file");
    }
    closeFile() {
        console.log("Closing CSV file");
    }
    parseData() {
        console.log("Parsing data from CSV file");
    }
}
exports.default = CSVDataMiner;
