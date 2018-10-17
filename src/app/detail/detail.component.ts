import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  customer = new Customer();

  constructor(private service: SharedService) { }

  ngOnInit() {
    console.log(this.service.getCustomer());
    this.customer = this.service.getCustomer();
  }

}
