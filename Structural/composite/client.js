"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Main.ts
var ResidentialUnit_1 = require("./ResidentialUnit");
var ApartmentComplex_1 = require("./ApartmentComplex");
var residentialUnit1 = new ResidentialUnit_1.ResidentialUnit('1 BHK', 'Prestige', '202', 'ENG');
var residentialUnit2 = new ResidentialUnit_1.ResidentialUnit('2 BHK', 'Prestige', '204', 'IN');
var residentialUnit3 = new ResidentialUnit_1.ResidentialUnit('3 BHK', 'Godrej', '204', 'IN');
var residentialUnit4 = new ResidentialUnit_1.ResidentialUnit('2 BHK', 'Prestige', '208', 'ENG');
var apartmentComplex = new ApartmentComplex_1.ApartmentComplex();
apartmentComplex.addChild(residentialUnit1);
apartmentComplex.addChild(residentialUnit2);
apartmentComplex.addChild(residentialUnit3);
apartmentComplex.addChild(residentialUnit4);
console.log(apartmentComplex.getDetails());
