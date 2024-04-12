"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DataMiner_1 = require("./DataMiner");
var PDFDataMiner = /** @class */ (function (_super) {
    __extends(PDFDataMiner, _super);
    function PDFDataMiner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PDFDataMiner.prototype.openFile = function (path) {
        console.log("Opening PDF file: ".concat(path));
    };
    PDFDataMiner.prototype.extractData = function () {
        console.log("Extracting data from PDF file");
    };
    PDFDataMiner.prototype.closeFile = function () {
        console.log("Closing PDF file");
    };
    PDFDataMiner.prototype.parseData = function () {
        console.log("Parsing data from PDF file");
    };
    return PDFDataMiner;
}(DataMiner_1.default));
exports.default = PDFDataMiner;
