import { element } from 'protractor';
import { Component, OnInit, Input } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-show-error',
  templateUrl: './show-error.component.html',
  styleUrls: ['./show-error.component.css']
})
export class ShowErrorComponent implements OnInit {
  @Input() data: any;
  message = '';
  constructor() { }
  num_skills = [];
  contains = function(arr, obj) {
      let i = arr.length;
      while (i--) {
          if (arr[i] === obj) {
              return true;
          }
      }
      return false;
  };
  ngOnInit() {
    for (const key in this.data.value) {
      if (this.data.key === 'skills' ) {
        const values = Object.entries(this.data.value);
        console.log(values.length);
        for (let i = 0; i < values.length; i++) {
          // console.log(`Num Skill Length: ${this.num_skills.length}`);
          if (this.contains(this.num_skills, `Skill${i + 1}`)) {
          } else {
            this.num_skills[i] = `Skill ${i + 1}`;
          }
           console.log(this.num_skills);
        }
        this.message = '';
        this.num_skills.forEach(e => {
          this.message += `${e} is required. `;
        });
      } else {
      switch (key) {
         case 'required': this.message += `${this.data.key} is required. `; break;
         case 'minlength': this.message += `${this.data.key} has to be a minimum length of ${this.data.value[key].requiredLength}`; break;
         // default: this.message += `${this.data.key} is required. `;
       }
      // let value = this.data.value[key];
      // console.log(`ngOnint ${value}`);
    }
  }
  }
}
