import Visitor from './visitor';
import Liquor from './liquor';
import Tobacco from './tobacco';
import Necessity from './necessity';

// Concrete Visitor implementation (Tax Calculator)
class TaxVisitor implements Visitor {
  visitLiquor(liquorItem: Liquor): string {
    const priceWithTax = Math.round(liquorItem.getPrice() * 1.18);
    return `Liquor item: Price with tax: ${priceWithTax}`;
  }

  visitTobacco(tobaccoItem: Tobacco): string {
    const priceWithTax = Math.round(tobaccoItem.getPrice() * 1.32);
    return `Tobacco item: Price with tax: ${priceWithTax}`;
  }

  visitNecessity(necessityItem: Necessity): string {
    const priceWithTax = necessityItem.getPrice();
    return `Necessity item: Price with tax: ${priceWithTax}`;
  }
}

export default TaxVisitor;