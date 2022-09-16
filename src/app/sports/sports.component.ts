import { Component, OnInit } from '@angular/core';
import * as sports from "../data/sports.json";

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  constructor() { }

  isVisible: boolean = false;
  hide_products() {
    this.isVisible = !this.isVisible;
  }

  ngOnInit(): void {
  }
  sport:any=(sports as any).default;
  
  productDetail=true;
  //Event to perform the toggle effect
  showproductDetailsToggle()
  {
    this.productDetail=!this.productDetail;
  }
  //function to toggle between the span content from + to - and vice versa
  //and bind the function to [ngClass]
  toggleContent(){
    var content='';
    if(this.productDetail){
      content='fa-solid fa-arrow-down';
    }
    else{
      content='fa-solid fa-arrow-up';
    }
    return content;
  }

}
