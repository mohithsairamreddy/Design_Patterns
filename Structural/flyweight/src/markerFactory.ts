import { Marker } from './marker';
import { ConcreteMarker } from './concreteMarker';

// Flyweight Factory
export class MarkerFactory {
  private static markers: { [key: string]: Marker } = {};

  static getMarker(markerImage: string): Marker {
    // If the marker already exists, return it
    if (this.markers[markerImage]) {
      console.log(`Returning existing marker: ${markerImage}`);
      return this.markers[markerImage];
    }

    // Otherwise, create a new marker and store it
    console.log(`Creating new marker: ${markerImage}`);
    const marker = new ConcreteMarker(markerImage);
    this.markers[markerImage] = marker;
    return marker;
  }
}