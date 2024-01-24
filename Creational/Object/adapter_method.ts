interface Payment{
    id : string;
    total : number;
    submit_payment():void;
}

class payments implements Payment{
    id : string;
    total : number;
    constructor(id:string,total:number){
        this.id=id;
        this.total=total;
    }
    submit_payment(){
        console.log(`The amount for Payment id ${this.id} is ${this.total}`);
    }

}

interface Third_Party_Payment{
    id : number;
    total:number;
    payment_request():void;
}

class third_party_payments implements Third_Party_Payment{
    id :number;
    total : number;
    constructor(id:number,total:number){
        this.total=total;
        this.id=id;
    }
    payment_request(){
        console.log(`The amount for Payment id ${this.id} is ${this.total}`);
    }
}

enum payment_type{
    my_payment,
    third_party
}


class payment_adapter implements Payment{
    id : string;
    total : number;
    type : payment_type;
    constructor(id:string,total:number,type:payment_type){
        this.id=id;
        this.total=total;
        this.type=type;
    }
    public submit_payment(){
        if(this.type == payment_type.my_payment){
            const id = this.id;
            const total = this.total;
            const payment =  new payments(id,total);
            payment.submit_payment();
        }
        else{
            const id = parseInt(this.id);
            const total = this.total;
            const payment = new third_party_payments(id,total);
            payment.payment_request();
        }
    }
}

let  payments_1= new payment_adapter("123", 47.99, payment_type.third_party);
payments_1.submit_payment();



