import { Marker } from './marker';

// Concrete Flyweight
export class ConcreteMarker implements Marker {
  private markerImage: string;

  constructor(markerImage: string) {
    this.markerImage = markerImage;
  }

  draw(x: number, y: number): void {
    console.log(`Drawing marker at (${x}, ${y}) with image: ${this.markerImage}`);
  }
}