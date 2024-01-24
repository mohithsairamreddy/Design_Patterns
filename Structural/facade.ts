import * as promptSync from 'prompt-sync';

const prompt = promptSync();

class Waiter {
    private welcomeCustomer: Welcome;
    private serviceCustomer: Service;
    private billRequest: Bill;

    constructor() {
        this.welcomeCustomer = new Welcome();
        this.serviceCustomer = new Service();
        this.billRequest = new Bill();
    }
}

class Welcome {
    welcome(): any {
        console.log("Welcome Sir");
        let welcomeReply = prompt("Type Hi or Hello : ");
        const services = new Service();
        if (welcomeReply === "Hi" || welcomeReply === "Hello") {
            services.service();
        } else {
            console.log("Hello Sir. It is pleasant to interact with you, sir");
            services.service();
        }
    }
}

class Service {
    service(): void {
        let selectFood = prompt("Please Enter your food : ");
        setTimeout(() => {
            console.log(`Here is your ${selectFood} Sir`);
            setTimeout(() => {
                let feedback = prompt("How was the food Sir? Good or Bad : ");

                let bills = new Bill();
                if (feedback === "Good") {
                    let billRequest = prompt("Can I generate a bill Sir ? Yes or No :");
                    if (billRequest === "Yes") {
                        bills.generateBill();
                    }
                } else {
                    console.log("We would improve on this.");
                    bills.generateBill();
                }
            }, 3000);

        }, 1000);
    }
}

class Bill {
    generateBill(): any {
        console.log("Here is Your Bill Sir");
    }
}

const main = new Welcome();
main.welcome();
