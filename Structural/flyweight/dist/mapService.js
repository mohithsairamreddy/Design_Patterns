"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapService = void 0;
const markerFactory_1 = require("./markerFactory");
const location_1 = require("./location");
// Map Service
class MapService {
    setSource(markerImage, x, y) {
        const marker = markerFactory_1.MarkerFactory.getMarker(markerImage);
        this.source = new location_1.Location(marker, x, y);
    }
    setDestination(markerImage, x, y) {
        const marker = markerFactory_1.MarkerFactory.getMarker(markerImage);
        this.destination = new location_1.Location(marker, x, y);
    }
    drawMap() {
        console.log('Drawing map...');
        this.source.draw();
        this.destination.draw();
    }
}
exports.MapService = MapService;
//# sourceMappingURL=mapService.js.map