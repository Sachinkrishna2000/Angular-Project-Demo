import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }
  @Input()product:any
 
  /*isVisible: boolean = true;
  hide_products() {
    this.isVisible = !this.isVisible;
  }*/
 
  
  ngOnInit(): void {
  }


//Toggle effect to show and hide the pdescription and price
  //Property for toggle effect
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
