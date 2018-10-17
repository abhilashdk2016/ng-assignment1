import { Injectable } from '@angular/core';
import { Customer } from './models/customer';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private customer: Customer;
  constructor() {
    this.customer = new Customer();
   }

   public setCustomer(cust: Customer): void {
     this.customer = cust;
     console.log(`Inside Service Customer is: ${JSON.stringify(this.customer)}`);
   }

   public getCustomer(): Customer {
    return this.customer;
   }
}
