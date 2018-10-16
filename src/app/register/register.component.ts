import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  states = ['Karnataka', 'Andhra Pradesh', 'Kerala', 'Tamil Nadu', 'Maharastra'];
  customerForm: FormGroup;
  customer: Customer = new Customer();

  constructor(private fb: FormBuilder) { }

  save() {
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
  }

  ngOnInit() {
    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(4)]],
      lastName: ['', [Validators.required]],
      address: ['', [Validators.required]],
      address2: [''],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      subscribe: true,
      primaryPhoneNumber: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      zip: ['', [Validators.required]]
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
}

