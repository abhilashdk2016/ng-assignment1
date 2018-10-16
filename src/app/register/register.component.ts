import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  customerForm: FormGroup;
  customer: Customer = new Customer();

  constructor(private fb: FormBuilder) { }

  save() {
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
  }

  ngOnInit() {
    this.customerForm = this.fb.group({
      firstName: '',
      lastName: '',
      address: '',
      address2: '',
      city: '',
      state: '',
      subscribe: true,
      primaryPhoneNumber: '',
      zip: ''
    });
    /*this.customerForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      address: new FormControl(),
      address2: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      subscribe: new FormControl(false),
      primaryPhoneNumber: new FormControl(),
      zip: new FormControl()
    });*/
  }

  populateTestData() {
    this.customerForm.setValue({
      firstName: 'Abhilash',
      lastName: 'D K',
      address: 'Hoodi',
      address2: 'Mahadevapura',
      city: 'Bengaluru',
      state: 'Karnataka',
      subscribe: true,
      primaryPhoneNumber: '8861188582',
      zip: '560048'
    });
  }

}
