"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkerFactory = void 0;
const concreteMarker_1 = require("./concreteMarker");
// Flyweight Factory
class MarkerFactory {
    static getMarker(markerImage) {
        // If the marker already exists, return it
        if (this.markers[markerImage]) {
            console.log(`Returning existing marker: ${markerImage}`);
            return this.markers[markerImage];
        }
        // Otherwise, create a new marker and store it
        console.log(`Creating new marker: ${markerImage}`);
        const marker = new concreteMarker_1.ConcreteMarker(markerImage);
        this.markers[markerImage] = marker;
        return marker;
    }
}
exports.MarkerFactory = MarkerFactory;
MarkerFactory.markers = {};
//# sourceMappingURL=markerFactory.js.map