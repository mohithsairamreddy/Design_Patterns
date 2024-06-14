// Main.ts
import { ResidentialUnit } from './ResidentialUnit';
import { ApartmentComplex } from './ApartmentComplex';

const residentialUnit1 = new ResidentialUnit('1 BHK', 'Prestige', '202', 'ENG');
const residentialUnit2 = new ResidentialUnit('2 BHK', 'Prestige', '204', 'IN');
const residentialUnit3 = new ResidentialUnit('3 BHK', 'Godrej', '204', 'IN');
const residentialUnit4 = new ResidentialUnit('2 BHK', 'Prestige', '208', 'ENG');

const apartmentComplex = new ApartmentComplex();
apartmentComplex.addChild(residentialUnit1);
apartmentComplex.addChild(residentialUnit2);
apartmentComplex.addChild(residentialUnit3);
apartmentComplex.addChild(residentialUnit4);

console.log(apartmentComplex.getDetails());
