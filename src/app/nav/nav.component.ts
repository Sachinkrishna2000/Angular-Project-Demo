import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }
  title = 'TECHKART';

  public logo = "https://cdn-icons-png.flaticon.com/512/1697/1697039.png";
  
  onSearch(){
    alert("Welcome To TechKart");
  }
  name = "John";

  //Accessing the Search Component
  //Property
  productentered: string=' '  //Laptop

  //Event
  search_product(product_name:string):void{ //Laptop
    if(!product_name)
    {
      this.productentered=' ';
    }
    this.productentered=product_name; //Laptop
    console.log(product_name)
  }
  
  ngOnInit(): void {
  }

}
