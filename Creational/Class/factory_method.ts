interface vehicle_factory{
    create_vehicle(p1:string,p2:number) : vehicle; 
}

class create_vehicle implements vehicle_factory{
   create_vehicle(p1: string, p2: number) : vehicle {
       if(p1=="Heavy" && p2==8){
           return new truck;
       }
       else if(p1=="Light" && p2==4){
           return new car;
       }
       else if(p1=="Light" && p2==2){
           return new bike;
       }
       else{
           return new error_vehicle
       }
   }
}

interface vehicle{
   drive() : any;
}

class truck implements vehicle{
   drive(){
       console.log("Thank you for choosing Truck as your vehicle");
   }
}

class car implements vehicle{
   drive(){
       console.log("Thank you for choosing Car as your vehicle");
   }
}

class bike implements vehicle{
   drive(){
       console.log("Thank you for choosing Bike as your vehicle");
   }
}

class error_vehicle implements vehicle{
   drive(){
       console.log("Oh Sorry Please select a correct vehicle");
   }
}

let call = new create_vehicle();
let truck_call = call.create_vehicle("Heavy",8);
truck_call.drive();

