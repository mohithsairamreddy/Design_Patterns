import Liquor from './liquor';
import Tobacco from './tobacco';
import Necessity from './necessity';

// Visitor interface
interface Visitor {
  visitLiquor(liquorItem: Liquor): string;
  visitTobacco(tobaccoItem: Tobacco): string;
  visitNecessity(necessityItem: Necessity): string;
}

export default Visitor;