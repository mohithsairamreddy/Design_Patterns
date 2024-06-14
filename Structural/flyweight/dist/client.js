"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mapService_1 = require("./mapService");
// Example usage
const mapService = new mapService_1.MapService();
mapService.setSource('redMarker.png', 10, 20);
mapService.setDestination('greenMarker.png', 30, 40);
mapService.drawMap();
// Setting the source with the same marker image as before
mapService.setSource('redMarker.png', 55, 65);
mapService.setDestination('greenMarker.png', 80, 90);
mapService.drawMap();
//# sourceMappingURL=client.js.map