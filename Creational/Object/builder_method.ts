class Wardrobe {
    doors: number;
    mirrors: number;
    material: string;
    hanging_rods: number;

    setdoors(doors: number): void {
        this.doors = doors;
    }

    setmirrors(mirrors: number): void {
        this.mirrors = mirrors;
    }

    setmaterial(material: string): void {
        this.material = material;
    }

    set_hanging_rods(hanging_rods: number): void {
        this.hanging_rods = hanging_rods;
    }
}

class WardrobeBuilder {
    private wardrobe: Wardrobe;
    private doors: number;
    private mirrors: number;
    private material: string;
    private hanging_rods: number;

    constructor() {
        this.wardrobe = new Wardrobe();
    }

    setdoors(doors: number): WardrobeBuilder {
        this.doors = doors;
        return this;
    }

    setmirrors(mirrors: number): WardrobeBuilder {
        this.mirrors = mirrors;
        return this;
    }

    setmaterial(material: string): WardrobeBuilder {
        this.material = material;
        return this;
    }

    set_hanging_rods(hanging_rods: number): WardrobeBuilder {
        this.hanging_rods = hanging_rods;
        return this;
    }

    about(): void {
        console.log(`The Properties of Wardrobe are it has ${this.doors} doors, ${this.mirrors} mirrors and made up with ${this.material}. It also contains ${this.hanging_rods} hanging rods.`);
    }
}

const my_wardrobe = new WardrobeBuilder().setdoors(4).set_hanging_rods(2).setmaterial("wood").setmirrors(2).about();