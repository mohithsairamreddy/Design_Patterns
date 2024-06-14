// ResidentialUnit.ts
import { ApartmentComponent } from './ApartmentComponent';

export class ResidentialUnit implements ApartmentComponent {
  constructor(
    private bhk: string,
    private builder: string,
    private flatNumber: string,
    private nationality: string
  ) {}

  getDetails(): string {
    return `${this.bhk} by ${this.builder}, Flat ${this.flatNumber}, ${this.nationality}`;
  }

  addChild(component: ApartmentComponent): void {
    throw new Error('Cannot add child to leaf node');
  }

  removeChild(component: ApartmentComponent): void {
    throw new Error('Cannot remove child from leaf node');
  }

  getChild(index: number): ApartmentComponent {
    throw new Error('Cannot get child from leaf node');
  }
}
