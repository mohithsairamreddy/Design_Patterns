// ApartmentComplex.ts
import { ApartmentComponent } from './ApartmentComponent';

export class ApartmentComplex implements ApartmentComponent {
  private components: ApartmentComponent[] = [];

  getDetails(): string {
    return this.components.map(component => component.getDetails()).join('\n');
  }

  addChild(component: ApartmentComponent): void {
    this.components.push(component);
  }

  removeChild(component: ApartmentComponent): void {
    const index = this.components.indexOf(component);
    if (index !== -1) {
      this.components.splice(index, 1);
    }
  }

  getChild(index: number): ApartmentComponent {
    return this.components[index];
  }
}
