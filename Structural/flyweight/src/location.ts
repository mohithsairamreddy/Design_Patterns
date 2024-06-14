import { Marker } from './marker';

// Location class
export class Location {
  private marker: Marker;
  private x: number;
  private y: number;

  constructor(marker: Marker, x: number, y: number) {
    this.marker = marker;
    this.x = x;
    this.y = y;
  }

  draw(): void {
    this.marker.draw(this.x, this.y);
  }
}