import { Marker } from './marker';
import { MarkerFactory } from './markerFactory';
import { Location } from './location';

// Map Service
export class MapService {
  public source!: Location;
  private destination!: Location;

  setSource(markerImage: string, x: number, y: number): void {
    const marker = MarkerFactory.getMarker(markerImage);
    this.source = new Location(marker, x, y);
  }

  setDestination(markerImage: string, x: number, y: number): void {
    const marker = MarkerFactory.getMarker(markerImage);
    this.destination = new Location(marker, x, y);
  }

  drawMap(): void {
    console.log('Drawing map...');
    this.source.draw();
    this.destination.draw();
  }
}