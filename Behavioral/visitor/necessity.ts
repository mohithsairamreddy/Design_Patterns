import Visitor from './visitor';
import Visitable from './visitable';

// Concrete Visitable implementation (Product Class)
class Necessity implements Visitable {

  private price: number = 0;

  constructor(price: number) {
    this.price = price;
  }

  getPrice(): number {
    return this.price;
  }

  accept(visitor: Visitor): string {
    return visitor.visitNecessity(this);
  }
}

export default Necessity;