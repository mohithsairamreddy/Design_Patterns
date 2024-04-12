"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DataMiner = /** @class */ (function () {
    function DataMiner() {
    }
    DataMiner.prototype.mine = function (path) {
        this.openFile(path);
        this.extractData();
        this.parseData();
        this.analyzeData();
        this.sendReport();
        this.closeFile();
    };
    DataMiner.prototype.analyzeData = function () {
        console.log("Analyzing data... (Default implementation)");
    };
    DataMiner.prototype.sendReport = function () {
        console.log("Sending report... (Default implementation)");
    };
    return DataMiner;
}());
exports.default = DataMiner;
