import Visitor from './visitor';
import Visitable from './visitable';

// Concrete Visitable implementation (Product Class)
class Tobacco implements Visitable {
  constructor(private price: number) {}

  getPrice(): number {
    return this.price;
  }

  accept(visitor: Visitor): string {
    return visitor.visitTobacco(this);
  }
}

export default Tobacco;