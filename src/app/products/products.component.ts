import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }
  isVisible: boolean = false;
  hide_products() {
    this.isVisible = !this.isVisible;
  }
 
  ProductDetails :any  = [
    {
      "pid": "1",
      "pname": "OnePlus 10T",
      "status": "In Stock",
      "price":"54999",
      "color": "green",
      "pimage":"https://m.media-amazon.com/images/I/61mIUCd-37L._SL1500_.jpg",
      "pdesc":"12GB RAM,256GB ROM Snapdragon 8+ Processor, 4800 mAh, 150W Fast Charging"
    },
    {
      "pid": "2",
      "pname": "Acer Predator Gaming",
      "status": "Few In Stock",
      "price":"288799",
      "color": "yellow",
      "pimage":"https://www.gadgetsnow.com/photo/78877550/Acer-Predator-Helios-300-Gaming-Laptop-Intel-i7-10750H-NVIDIA-GeForce-RTX-2070-Max-Q-8GB-156-FHD-240Hz-3ms-IPS-16GB-Dual-Channel-DDR4-512GB-NVMe-SSD-1TB-HDD-WiFi-6-RGB-KB-PH315-53-71VG.jpg",
      "pdesc":"Intel i7-10750H Processor, NVIDIA GeForce RTX 2070 GC, 16GB RAM, 512GB Storage"
    },
    {
      "pid": "3",
      "pname": "Asus ROG 5",
      "status": "In Stock",
      "price":"49999",
      "color": "green",
      "pimage":"https://m.media-amazon.com/images/I/61gor7EwOlL._AC_SX522_.jpg",
      "pdesc":"8GB RAM, 128GB Storage, Qualcomm® 660 Processor, 144Hz, AMOLED Display"
    },
    {
      "pid": "4",
      "pname": "POCO F3 GT",
      "status": "In Stock",
      "price":"28999",
      "color": "green",
      "pimage":"https://www.notebookcheck.net/uploads/tx_nbc2/XiaomiPocoF3GT.jpg",
      "pdesc":"6 GB RAM | 128 GB ROM  MediaTek Dimensity 1200 Prcsr 5065mAh Bat, Full HD+ Display"
    },
    {
      "pid": "5",
      "pname": "Acer Nitro Gaming",
      "status": "Out Of Stock",
      "price":"59999",
      "color": "red",
      "pimage":"https://m.media-amazon.com/images/I/71+kGr+5LrL._SX450_.jpg",
      "pdesc":"Intel Core i5-10300H processor NVIDIA GeForce GTX 1650 GC, 1 TB HDD + 256 GB SSD Storage"
    },
    {
      "pid": "6",
      "pname": "HP Pavillion Gaming",
      "status": "In Stock",
      "price":"89999",
      "color": "green",
      "pimage":"https://m.media-amazon.com/images/I/71-mNJLIR5L._AC_SL1500_.jpg",
      "pdesc":" AMD Ryzen 5 4600H Processor NVIDIA GeForce GTX 1650 GC 8GB DDR4 RAM, 512 GB Storage"
    },
    {
      "pid": "7",
      "pname": "Samsung Galaxy s20 ultra",
      "status": "Few In Stock",
      "price":"92999",
      "color": "yellow",
      "pimage":"https://m.media-amazon.com/images/I/61i9rG1L94S._AC_SX466_.jpg",
      "pdesc":"12GB RAM 128GB Storage  Exynos 9 Octa 990 Processor 5000mAh Bat Full HD+ Display"
    },
    {
      "pid": "8",
      "pname": "ASUS TUF Gaming",
      "status": "In Stock",
      "price":"92990",
      "color": "green",
      "pimage":"https://m.media-amazon.com/images/I/71XkMLayGAL._SL1500_.jpg",
      "pdesc":"Intel Core i7-11800H 11th Gen, NVIDIA GeForce RTX 3050 GC, 8GB RAM 1TB SSD Storage"
    },
    {
      "pid": "9",
      "pname": "Oneplus nord 2t",
      "status": "Out Of Stock",
      "price": "28999",
      "color": "yellow",
      "pimage":"https://m.media-amazon.com/images/I/617MPEZB5mL._SL1500_.jpg",
      "pdesc":"8GB RAM | 128GB Storage Mediatek Dimensity 1300 Processor, 90 Hz AMOLED Display"
    }
  ]
  
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
}
