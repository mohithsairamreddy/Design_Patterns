import TaxVisitor from './taxVisitor';
import Liquor from './liquor';
import Tobacco from './tobacco';
import Necessity from './necessity';

// Example usage
const taxVisitor = new TaxVisitor();

const milk = new Necessity(1.99);
const liquor = new Liquor(11.99);
const tobacco = new Tobacco(19.99);

console.log(milk.accept(taxVisitor)); // Output: Necessity item: Price with tax: 1.99
console.log(liquor.accept(taxVisitor)); // Output: Liquor item: Price with tax: 14
console.log(tobacco.accept(taxVisitor)); // Output: Tobacco item: Price with tax: 26