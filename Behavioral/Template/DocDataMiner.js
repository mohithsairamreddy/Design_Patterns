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
var DocDataMiner = /** @class */ (function (_super) {
    __extends(DocDataMiner, _super);
    function DocDataMiner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DocDataMiner.prototype.openFile = function (path) {
        console.log("Opening DOC file: ".concat(path));
    };
    DocDataMiner.prototype.extractData = function () {
        console.log("Extracting data from DOC file");
    };
    DocDataMiner.prototype.closeFile = function () {
        console.log("Closing DOC file");
    };
    DocDataMiner.prototype.parseData = function () {
        console.log("Parsing data from DOC file");
    };
    return DocDataMiner;
}(DataMiner_1.default));
exports.default = DocDataMiner;
