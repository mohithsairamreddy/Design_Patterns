"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteMarker = void 0;
// Concrete Flyweight
class ConcreteMarker {
    constructor(markerImage) {
        this.markerImage = markerImage;
    }
    draw(x, y) {
        console.log(`Drawing marker at (${x}, ${y}) with image: ${this.markerImage}`);
    }
}
exports.ConcreteMarker = ConcreteMarker;
//# sourceMappingURL=concreteMarker.js.map