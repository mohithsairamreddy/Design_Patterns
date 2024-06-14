"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApartmentComplex = void 0;
var ApartmentComplex = /** @class */ (function () {
    function ApartmentComplex() {
        this.components = [];
    }
    ApartmentComplex.prototype.getDetails = function () {
        return this.components.map(function (component) { return component.getDetails(); }).join('\n');
    };
    ApartmentComplex.prototype.addChild = function (component) {
        this.components.push(component);
    };
    ApartmentComplex.prototype.removeChild = function (component) {
        var index = this.components.indexOf(component);
        if (index !== -1) {
            this.components.splice(index, 1);
        }
    };
    ApartmentComplex.prototype.getChild = function (index) {
        return this.components[index];
    };
    return ApartmentComplex;
}());
exports.ApartmentComplex = ApartmentComplex;
