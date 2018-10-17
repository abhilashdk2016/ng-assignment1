import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-error',
  templateUrl: './show-error.component.html',
  styleUrls: ['./show-error.component.css']
})
export class ShowErrorComponent implements OnInit {
  @Input() data: any;
  message = '';
  constructor() { }

  ngOnInit() {
    console.log(this.data.key);
    for (let key in this.data.value) {
      switch(key) {
         case 'required': this.message += `${this.data.key} is required. `; break;
         case 'minlength': this.message += `${this.data.key} has to be a minimum length of ${this.data.value[key].requiredLength}`; break;
         //default: this.message += `${this.data.key} is required. `;
       }
      // let value = this.data.value[key];
      // console.log(`ngOnint ${value}`);
    }
  }

}
