"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DocDataMiner_1 = require("./DocDataMiner");
var CSVDataMiner_1 = require("./CSVDataMiner");
var PDFDataMiner_1 = require("./PDFDataMiner");
var docDataMiner = new DocDataMiner_1.default();
var csvDataMiner = new CSVDataMiner_1.default();
var pdfDataMiner = new PDFDataMiner_1.default();
docDataMiner.mine("data.doc");
csvDataMiner.mine("data.csv");
pdfDataMiner.mine("data.pdf");