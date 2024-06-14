import Visitor from './visitor';
import Visitable from './visitable';

// Concrete Visitable implementation (Product Class)
class Liquor implements Visitable {
  constructor(private price: number) {}

  getPrice(): number {
    return this.price;
  }

  accept(visitor: Visitor): string {
    return visitor.visitLiquor(this);
  }
}

export default Liquor;