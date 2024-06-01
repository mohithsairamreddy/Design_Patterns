"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const promptSync = __importStar(require("prompt-sync"));
const prompt = promptSync();
class Waiter {
    constructor() {
        this.welcomeCustomer = new Welcome();
        this.serviceCustomer = new Service();
        this.billRequest = new Bill();
    }
}
class Welcome {
    welcome() {
        console.log("Welcome Sir");
        let welcomeReply = prompt("Type Hi or Hello : ");
        const services = new Service();
        if (welcomeReply === "Hi" || welcomeReply === "Hello") {
            services.service();
        }
        else {
            console.log("Hello Sir. It is pleasant to interact with you, sir");
            services.service();
        }
    }
}
class Service {
    service() {
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
                }
                else {
                    console.log("We would improve on this.");
                    bills.generateBill();
                }
            }, 3000);
        }, 1000);
    }
}
class Bill {
    generateBill() {
        console.log("Here is Your Bill Sir");
    }
}
const main = new Welcome();
main.welcome();
