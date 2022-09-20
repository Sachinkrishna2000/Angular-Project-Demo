import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-home-appliance',
  templateUrl: './home-appliance.component.html',
  styleUrls: ['./home-appliance.component.css']
})
export class HomeApplianceComponent implements OnInit {

  constructor() { }
  @Input()product:any
 
 
  isVisible: boolean = false;
  hide_products() {
    this.isVisible = !this.isVisible;
  }

  ngOnInit(): void {
  }
  
  
  productDetail=true;

  showproductDetailsToggle()
  {
    this.productDetail=!this.productDetail;
  }

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
  prod_array:string[]=['widthh','shadoww','background','borderr','maxx'];

}
class cards{
  widthh:boolean=true;
  shadoww:boolean=true;
  background:boolean=true;
  borderr:boolean=true;
  maxx:boolean=true;
}

