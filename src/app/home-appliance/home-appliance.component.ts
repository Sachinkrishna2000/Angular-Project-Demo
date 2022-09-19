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
