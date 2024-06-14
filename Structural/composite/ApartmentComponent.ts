// ApartmentComponent.ts
export interface ApartmentComponent {
  getDetails(): string;
  addChild(component: ApartmentComponent): void;
  removeChild(component: ApartmentComponent): void;
  getChild(index: number): ApartmentComponent;
}
