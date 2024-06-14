"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DocDataMiner_1 = __importDefault(require("./DocDataMiner"));
const CSVDataMiner_1 = __importDefault(require("./CSVDataMiner"));
const PDFDataMiner_1 = __importDefault(require("./PDFDataMiner"));
const docDataMiner = new DocDataMiner_1.default();
const csvDataMiner = new CSVDataMiner_1.default();
const pdfDataMiner = new PDFDataMiner_1.default();
docDataMiner.mine("data.doc");
csvDataMiner.mine("data.csv");
pdfDataMiner.mine("data.pdf");
