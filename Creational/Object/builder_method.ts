// Product class
class Wardrobe {
    doors!: number;
    mirrors!: number;
    material!: string;
    hanging_rods!: number;

    setDoors(doors: number): void {
        this.doors = doors;
    }

    setMirrors(mirrors: number): void {
        this.mirrors = mirrors;
    }

    setMaterial(material: string): void {
        this.material = material;
    }

    setHangingRods(hanging_rods: number): void {
        this.hanging_rods = hanging_rods;
    }

    about(): void {
        console.log(`The Properties of Wardrobe are it has ${this.doors} doors, ${this.mirrors} mirrors and made up with ${this.material}. It also contains ${this.hanging_rods} hanging rods.`);
    }
}

// Builder interface
interface WardrobeBuilder {
    setDoors(doors: number): WardrobeBuilder;
    setMirrors(mirrors: number): WardrobeBuilder;
    setMaterial(material: string): WardrobeBuilder;
    setHangingRods(hanging_rods: number): WardrobeBuilder;
    getResult(): Wardrobe;
}

// Concrete builder
class ConcreteWardrobeBuilder implements WardrobeBuilder {
    private wardrobe: Wardrobe;

    constructor() {
        this.wardrobe = new Wardrobe();
    }

    setDoors(doors: number): WardrobeBuilder {
        this.wardrobe.setDoors(doors);
        return this;
    }

    setMirrors(mirrors: number): WardrobeBuilder {
        this.wardrobe.setMirrors(mirrors);
        return this;
    }

    setMaterial(material: string): WardrobeBuilder {
        this.wardrobe.setMaterial(material);
        return this;
    }

    setHangingRods(hanging_rods: number): WardrobeBuilder {
        this.wardrobe.setHangingRods(hanging_rods);
        return this;
    }

    getResult(): Wardrobe {
        return this.wardrobe;
    }
}

// Director class
class WardrobeDirector {
    private builder: WardrobeBuilder;

    constructor(builder: WardrobeBuilder) {
        this.builder = builder;
    }

    construct(): Wardrobe {
        return this.builder
            .setDoors(4)
            .setMirrors(2)
            .setMaterial("wood")
            .setHangingRods(2)
            .getResult();
    }
}

// Usage
const builder = new ConcreteWardrobeBuilder();
const director = new WardrobeDirector(builder);
const myWardrobe = director.construct();
myWardrobe.about();