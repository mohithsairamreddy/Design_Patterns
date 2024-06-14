import { MapService } from './mapService';

// Example usage
const mapService = new MapService();

mapService.setSource('redMarker.png', 10, 20);
mapService.setDestination('greenMarker.png', 30, 40);
mapService.drawMap();

// Setting the source with the same marker image as before
mapService.setSource('redMarker.png', 55, 65);
mapService.setDestination('greenMarker.png', 80, 90);
mapService.drawMap();