import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
//import {HTTP_PROVIDERS} from '@angular/http';

import { Deal } from './deal';
import { DealService } from './deal.service';

@Component({
  //selector: 'public-deals',
  templateUrl: './app/public-deals.component.html',
  styleUrls: ['./app/public-deals.component.css']
  //providers:[DealService, HTTP_PROVIDERS]
})
export class PublicDealsComponent implements OnInit {
  publicDeals: Deal[];

  constructor(private _dealService: DealService,  private authService: AuthService ) {    //private authService: AuthService) {
    console.log("you have hit deals !!!");
  }

  ngOnInit(): void {
    console.log('Inside ng init on deal service');
    this._dealService.getPublicDeals().subscribe(deals => this.publicDeals = deals);
  }
  
  purchase(item){
    alert("You bought the: " + item.name);
  }
}
