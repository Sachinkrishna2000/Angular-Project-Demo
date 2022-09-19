import { Component, OnInit, Input } from '@angular/core';
/*import * as sports from "../data/sports.json";*/


@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {


  constructor() { }
  @Input()product:any

  

  ngOnInit(): void {
    
  }
  /*sport:any=(sports as any).default;*/
  
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
  InStock(){
    alert("Yayy!!! The Product is In Stock, Proceed To Buy");
  }

  FewInStock(){
    alert("Hurry Up!!! Only Few Left In Stock");
  }
  OutOfStock(){
    alert("Oops!!! Currently This Item Isn't Available. Please Try Again Next Time.")
  }

}
