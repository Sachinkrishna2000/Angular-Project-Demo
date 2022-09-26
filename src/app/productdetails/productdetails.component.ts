import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductModel } from '../product-model';
import { ProductapiService } from '../productapi.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  formValue!: FormGroup;
  productModelObj : ProductModel = new ProductModel();
  productData!: any;
  showAdd!: boolean;
  showUpdate!: boolean;

  constructor(private formbuilder: FormBuilder, private api:ProductapiService, private router:Router) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      pname:[''],
      pdesc:[''],
      price:[''],
      status:[''],
      pimage:['']
    })
    this.getProducts();
  }
  clickAddProduct(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  postProductDetails(){
    this.productModelObj.pname = this.formValue.value.pname;
    this.productModelObj.pdesc = this.formValue.value.pdesc;
    this.productModelObj.price = this.formValue.value.price;
    this.productModelObj.status = this.formValue.value.status;
    this.productModelObj.pimage = this.formValue.value.pimage;

    this.api.postProducts(this.productModelObj).subscribe(res=>{
      console.log(res);
      alert("New product added successfully!")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getProducts();
    },
    err=>{
      alert("Something went wrong. Please check again!")
    })
  }
  

  getProducts(){
    this.api.getProductDetails().subscribe(res=>{
      this.productData = res;
    }, err=>{
      
    })
  }

  deleteProducts(product: any){
    this.api.deleteProducts(product.id).subscribe(res=>{
      alert("The Product deleted!")
      this.getProducts();
    }), 
    ({

    })
  }

  onEdit(product: any){
    this.showAdd = false;
    this.showUpdate = true;
    this.productModelObj.id = product.id;
    this.formValue.controls['pname'].setValue(product.pname);
    this.formValue.controls['pdesc'].setValue(product.pdesc);
    this.formValue.controls['price'].setValue(product.price);
    this.formValue.controls['status'].setValue(product.status);
    this.formValue.controls['pimage'].setValue(product.pimage);
  }

  updateProductDetails(){
    this.productModelObj.pname = this.formValue.value.pname;
    this.productModelObj.pdesc = this.formValue.value.pdesc;
    this.productModelObj.price = this.formValue.value.price;
    this.productModelObj.status = this.formValue.value.status;
    this.productModelObj.pimage = this.formValue.value.pimage;
    this.api.updateProducts(this.productModelObj, this.productModelObj.id).subscribe(res=>{
      alert("The product updated!")

      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getProducts();
    })
  }
  productdetails(){
    this.router.navigate(['productdetails']);
  }
  userdetails(){
    this.router.navigate(['userdetails']);
  }
  feedbackdetails(){
    this.router.navigate(['feedbackdetails']);
  }

}
