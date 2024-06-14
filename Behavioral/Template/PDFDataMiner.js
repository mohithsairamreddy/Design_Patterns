"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DataMiner_1 = __importDefault(require("./DataMiner"));
class PDFDataMiner extends DataMiner_1.default {
    openFile(path) {
        console.log(`Opening PDF file: ${path}`);
    }
    extractData() {
        console.log("Extracting data from PDF file");
    }
    closeFile() {
        console.log("Closing PDF file");
    }
    parseData() {
        console.log("Parsing data from PDF file");
    }
}
exports.default = PDFDataMiner;
