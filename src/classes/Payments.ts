import { HasFormatter } from "../interfaces/HasFormatter";

export class Payments implements HasFormatter {
    private recipient: string;
    private details: string;
    private amount: number;
    constructor(r: string, d: string, a: number) {
      this.recipient = r
      this.details = d
      this.amount = a
    }
  
    format(){
      return `${this.recipient} owed $${this.amount} for ${this.details}`
    }
  }
  