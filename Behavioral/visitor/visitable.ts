import Visitor from './visitor';

// Visitable interface
interface Visitable {
  accept(visitor: Visitor): string;
}

export default Visitable;