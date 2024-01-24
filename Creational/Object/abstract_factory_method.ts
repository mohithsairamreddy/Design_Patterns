export{}

interface VehicleFactory {
    createVehicle(model: string) : any;
}

class CreateVehicleModel implements VehicleFactory {
   createVehicle(model: string)  : any { 
       if (model == "bus") {
           return new Bus();
       } else  {
           return new Bike();
       } 
   }
}

interface BusFactory extends CreateVehicleModel {
    createBusBrand(brand: string) : any;
}


class Bus implements BusFactory{
   createBusBrand(brand:string):any{
       if(brand=="volvo"){
           return new volvo();
       }
       else{
           return new scania();
       }
   }
}

interface BikeFactory extends CreateVehicleModel {
    createBikeBrand(brand: string) : any;
}

class Bike implements BikeFactory{
   createVehicle(model: string) {
       throw new Error("Method not implemented.");
   }
   createBikeBrand(brand:string):any{
       if(brand=="ducati"){
           return new ducati();
       }
       else{
           return new ninja();
       }
   }
}


class ducati extends Bike {
   welcome() {
       console.log("Thank you for choosing Ducati as your vehicle");
   }
}

class ninja extends Bike {
   welcome() {
       console.log("Thank you for choosing ninja as your vehicle");
   }
}

class volvo extends Bus {
   welcome() {
       console.log("Thank you for choosing Volvo as your vehicle");
   }
}

class scania extends Bus {
   welcome() {
       console.log("Thank you for choosing Volvo as your vehicle");
   }
}


let vehicle = new CreateVehicleModel();
let bus_model = vehicle.createVehicle("bus");
bus_model.createBusBrand("volvo").welcome();

let bike_model=vehicle.createVehicle("bike");
bike_model.createBikeBrand("ninja").welcome();

