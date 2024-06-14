"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResidentialUnit = void 0;
var ResidentialUnit = /** @class */ (function () {
    function ResidentialUnit(bhk, builder, flatNumber, nationality) {
        this.bhk = bhk;
        this.builder = builder;
        this.flatNumber = flatNumber;
        this.nationality = nationality;
    }
    ResidentialUnit.prototype.getDetails = function () {
        return "".concat(this.bhk, " by ").concat(this.builder, ", Flat ").concat(this.flatNumber, ", ").concat(this.nationality);
    };
    ResidentialUnit.prototype.addChild = function (component) {
        throw new Error('Cannot add child to leaf node');
    };
    ResidentialUnit.prototype.removeChild = function (component) {
        throw new Error('Cannot remove child from leaf node');
    };
    ResidentialUnit.prototype.getChild = function (index) {
        throw new Error('Cannot get child from leaf node');
    };
    return ResidentialUnit;
}());
exports.ResidentialUnit = ResidentialUnit;
