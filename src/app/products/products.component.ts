import { Component, OnInit, Input } from '@angular/core';
import { Cartitem } from '../cartitem';
import { CartService } from '../cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private cartsvc:CartService) { }

   //Add to cart
   cart:Cartitem={
    id:0,
    pname:'',
    pdesc:'',
    price:0,
    pimage:'',
    quantity:1,
    totalPrice:1    
  }
  quantity:number=1;

  addToCart(product:any){
    this.cart.pname=product.pname;
    this.cart.pdesc=product.pdesc;
    this.cart.price=product.price;
    this.cart.pimage=product.pimage;
    this.cart.price=product.price;
    this.cart.totalPrice=product.totalPrice;
    this.cart.quantity=this.quantity;
    this.cart.id=product.id;
    this.cartsvc.addToCart(this.cart);
    console.log(product.id);
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    })

    Toast.fire({
      icon: 'success',
      title: 'Item added successfully'
    })
    this.cartsvc.getCount();
  }

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
  //prod:cards=new cards();

prod_array:string[]=['widthh','shadoww','background','borderr','maxx'];

}


class cards{
  widthh:boolean=true;
  shadoww:boolean=true;
  background:boolean=true;
  borderr:boolean=true;
  maxx:boolean=true;
}
