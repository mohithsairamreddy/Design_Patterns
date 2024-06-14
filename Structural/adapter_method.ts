// Target Interface
interface Payment {
    id: string;
    total: number;
    submit_payment(): void;
}

// Adapted Class 1 (Credit Card Payment)
interface CreditCardPayment {
    id: number;
    total: number;
    cvv: string;
    payment_request(): void;
}

class CreditCardPayments implements CreditCardPayment {
    id: number;
    total: number;
    cvv: string;
    constructor(id: number, total: number, cvv: string) {
        this.id = id;
        this.total = total;
        this.cvv = cvv;
    }
    payment_request() {
        console.log(`Processing credit card payment of ${this.total} for Payment id ${this.id} with CVV ${this.cvv}`);
    }
}

// Adapted Class 2 (PayPal Payment)
interface PayPalPayment {
    orderId: string;
    amount: number;
    processPayment(): void;
}

class PayPalPayments implements PayPalPayment {
    orderId: string;
    amount: number;
    constructor(orderId: string, amount: number) {
        this.orderId = orderId;
        this.amount = amount;
    }
    processPayment() {
        console.log(`Processing PayPal payment of ${this.amount} for order ${this.orderId}`);
    }
}

// Adapted Class 3 (Cash Payment)
class CashPayments {
    total: number;
    constructor(total: number) {
        this.total = total;
    }
    submit_payment() {
        console.log(`Processing cash payment of ${this.total}`);
    }
}

// Payment Type Enum
enum PaymentType {
    CreditCard,
    PayPal,
    Cash
}

// Adapter
class PaymentAdapter implements Payment {
    id: string;
    total: number;
    type: PaymentType;
    cvv?: string; 

    constructor(id: string, total: number, type: PaymentType, cvv?: string) {
        this.id = id;
        this.total = total;
        this.type = type;
        if (cvv) this.cvv = cvv;
    }

    public submit_payment() {
        switch (this.type) {
            case PaymentType.CreditCard:
                if (!this.cvv) {
                    throw new Error("CVV is required for credit card payments");
                }
                const creditCardPayment = new CreditCardPayments(parseInt(this.id), this.total, this.cvv);
                creditCardPayment.payment_request();
                break;
            case PaymentType.PayPal:
                const paypalPayment = new PayPalPayments(this.id, this.total);
                paypalPayment.processPayment();
                break;
            case PaymentType.Cash:
                const cashPayment = new CashPayments(this.total);
                cashPayment.submit_payment();
                break;
        }
    }
}

// Client code
let payments1 = new PaymentAdapter("123", 47.99, PaymentType.CreditCard, "123");
payments1.submit_payment();

let payments2 = new PaymentAdapter("789", 150.00, PaymentType.PayPal);
payments2.submit_payment();

let payments3 = new PaymentAdapter("101", 200.00, PaymentType.Cash);
payments3.submit_payment();
