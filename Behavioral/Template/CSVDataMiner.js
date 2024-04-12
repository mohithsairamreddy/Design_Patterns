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
var CSVDataMiner = /** @class */ (function (_super) {
    __extends(CSVDataMiner, _super);
    function CSVDataMiner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CSVDataMiner.prototype.openFile = function (path) {
        console.log("Opening CSV file: ".concat(path));
    };
    CSVDataMiner.prototype.extractData = function () {
        console.log("Extracting data from CSV file");
    };
    CSVDataMiner.prototype.closeFile = function () {
        console.log("Closing CSV file");
    };
    CSVDataMiner.prototype.parseData = function () {
        console.log("Parsing data from CSV file");
    };
    return CSVDataMiner;
}(DataMiner_1.default));
exports.default = CSVDataMiner;
