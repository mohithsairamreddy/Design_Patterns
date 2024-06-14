// Abstract Factory Interface
interface IVehicleFactory {
    createVehicle(model: string): IVehicle;
}

// Abstract Product Interfaces
interface IVehicle {
    createBrand(brand: string): IBrand;
}

interface IBrand {
    welcome(): void;
}

// Concrete Vehicle Factories
class CreateVehicleFactory implements IVehicleFactory {
    createVehicle(model: string): IVehicle {
        if (model === "bus") {
            return new BusFactory();
        } else if (model === "bike") {
            return new BikeFactory();
        } else {
            throw new Error("Unknown vehicle model");
        }
    }
}

// Concrete Vehicle Factories for Bus
class BusFactory implements IVehicle {
    createBrand(brand: string): IBrand {
        if (brand === "volvo") {
            return new Volvo();
        } else if (brand === "scania") {
            return new Scania();
        } else {
            throw new Error("Unknown bus brand");
        }
    }
}

// Concrete Vehicle Factories for Bike
class BikeFactory implements IVehicle {
    createBrand(brand: string): IBrand {
        if (brand === "ducati") {
            return new Ducati();
        } else if (brand === "ninja") {
            return new Ninja();
        } else {
            throw new Error("Unknown bike brand");
        }
    }
}

// Concrete Bus Brands
class Volvo implements IBrand {
    welcome() {
        console.log("Thank you for choosing Volvo as your vehicle");
    }
}

class Scania implements IBrand {
    welcome() {
        console.log("Thank you for choosing Scania as your vehicle");
    }
}

// Concrete Bike Brands
class Ducati implements IBrand {
    welcome() {
        console.log("Thank you for choosing Ducati as your vehicle");
    }
}

class Ninja implements IBrand {
    welcome() {
        console.log("Thank you for choosing Ninja as your vehicle");
    }
}

// Client Code
let vehicleFactory = new CreateVehicleFactory();

let busFactory = vehicleFactory.createVehicle("bus");
let busBrand = busFactory.createBrand("volvo");
busBrand.welcome();

let bikeFactory = vehicleFactory.createVehicle("bike");
let bikeBrand = bikeFactory.createBrand("ninja");
bikeBrand.welcome();
