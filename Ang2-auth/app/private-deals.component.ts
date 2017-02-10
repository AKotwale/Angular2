import { Component, OnInit } from '@angular/core';

import { Deal } from './deal';
import { DealService } from './deal.service';
//import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
  selector: 'private-deals',
  templateUrl: './app/private-deals.component.html',
  styleUrls: ['./app/private-deals.component.css']
   //providers:[DealService, HTTP_PROVIDERS]
})
export class PrivateDealsComponent implements OnInit {
  privateDeals : Deal[];
  error: any;

  constructor(
    private dealService: DealService) { }

  getPrivateDeals(): void {
    this.dealService.getPrivateDeals()
    .subscribe(privateDeals => this.privateDeals = privateDeals );
      
    //console.log("Does not supported !!!");
  }

  ngOnInit(): void {
    this.getPrivateDeals();
    //console.log("Does not supported !!!");
  }

  purchase(item){
    alert("You bought the: " + item.name);
  }
}
