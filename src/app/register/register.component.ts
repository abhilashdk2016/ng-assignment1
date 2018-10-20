import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl, FormArray } from '@angular/forms';
import { Customer } from '../models/customer';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';


function ratingRange(min: number, max: number): ValidatorFn {
  return (c: AbstractControl): {[key: string]: boolean} | null => {
    if (c.value !== undefined && (isNaN(c.value) || c.value < min || c.value > max)) {
      return { 'range': true};
    }
    return null;
  };

}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  states = ['Karnataka', 'Andhra Pradesh', 'Kerala', 'Tamil Nadu', 'Maharastra'];
  customerForm: FormGroup;
  skills: FormArray;
  customer: Customer = new Customer();
  visible = true;
  show = true;
  constructor(private fb: FormBuilder, private service: SharedService, private router: Router) { }

  save() {
    // console.log('Saved: ' + JSON.stringify(this.customerForm.value));
    console.log('inside save');
    if (this.customerForm.valid) {
      this.show = true;
      this.customer.firstName = this.customerForm.get('firstName').value;
      this.customer.lastName = this.customerForm.get('lastName').value;
      this.customer.email = this.customerForm.get('email').value;
      this.customer.subscribeNewsLetter = this.customerForm.get('subscribe').value;
      this.customer.address1 = this.customerForm.get('address').value;
      this.customer.address2 = this.customerForm.get('address2').value;
      this.customer.city = this.customerForm.get('city').value;
      this.customer.state = this.customerForm.get('state').value;
      this.customer.zip = this.customerForm.get('zip').value;
      this.customer.phoneNumber = this.customerForm.get('primaryPhoneNumber').value;
      this.service.setCustomer(this.customer);
      this.router.navigate(['/details']);
    } else {
      this.show = false;
      this.customerForm.setErrors({
        invalid: true
      });
      // console.log(this.customerForm.errors);
       this.validateAllFormFields(this.customerForm);
    }
    // this.show = !this.show;
    console.log(`save(): this.show => ${this.show}`);
  }

  ngOnInit() {
    console.log('inside init');
    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(4)]],
      lastName: ['', [Validators.required]],
      address: ['', [Validators.required]],
      address2: [''],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      subscribe: true,
      primaryPhoneNumber: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      email: ['', [Validators.required, Validators.email]],
      zip: ['', [Validators.required]],
      // secondaryPhoneNumber: ['']
      phoneGroup: this.fb.group({
        secondaryPhoneNumber: ['']
      }),
      skills: this.fb.array([])
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

  createSkills(): FormGroup {
    return this.fb.group({
      skill: ['', Validators.required]
    });
  }

  addSkill(): void {
    this.skills = this.customerForm.get('skills') as FormArray;
    this.skills.push(this.createSkills());
  }

  deleteSkill(index): void {
    this.skills.removeAt(index);
  }

  toggle() {
    /*console.log('inside toggle');
    const secondaryPhoneNumber = this.customerForm.get('secondaryPhoneNumber');
    if (this.visible) {
      secondaryPhoneNumber.setValidators([Validators.required, Validators.pattern('[0-9]{10}')]);
    } else {
      secondaryPhoneNumber.clearValidators();
    }
    secondaryPhoneNumber.updateValueAndValidity();
    // console.log(`toggle(): this.show => ${this.show}`);
    this.visible = !this.visible;*/
    const secondaryPhoneNumber = this.customerForm.get('phoneGroup').get('secondaryPhoneNumber');
    if (this.visible) {
      secondaryPhoneNumber.setValidators([Validators.required, Validators.pattern('[0-9]{10}')]);
    } else {
      secondaryPhoneNumber.clearValidators();
    }
    secondaryPhoneNumber.updateValueAndValidity();
    // console.log(`toggle(): this.show => ${this.show}`);
    this.visible = !this.visible;
  }

  Existing() {
  }

  validateAllFormFields(formGroup: FormGroup) {
      Object.keys(formGroup.controls).forEach(field => {
        const control = formGroup.get(field);
        if (control instanceof FormControl) {
          control.markAsTouched({ onlySelf: true });
        } else if (control instanceof FormGroup) {
          this.validateAllFormFields(control);
        }
    });
  }

  getAllErrors(form: FormGroup | FormArray): any | null {
    let hasError = false;
    const result = Object.keys(form.controls).reduce((acc, key) => {
        const control = form.get(key);
        const errors = (control instanceof FormGroup || control instanceof FormArray)
            ? this.getAllErrors(control)
            : control.errors;
        if (errors) {
            acc[key] = errors;
            hasError = true;
        }
        return acc;
    }, {} as { [key: string]: any; });
    return hasError ? result : null;
}
}
