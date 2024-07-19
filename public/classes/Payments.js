export class Payments {
    constructor(r, d, a) {
        this.recipient = r;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.recipient} owed $${this.amount} for ${this.details}`;
    }
}
