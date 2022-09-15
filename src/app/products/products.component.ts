import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }
  isVisible: boolean = true;
  hide_products() {
    this.isVisible = !this.isVisible;
  }
  /*ProductDetails = [
    {
      "pid": "1001",
      "image":"https://m.media-amazon.com/images/I/71nz3cIcFOL.jpg",
      "pname": "Acer Gaming Laptop",
      "pdescription": "Price: 1,00,000/-",
      "status": "In Stock",
      
    },
    {
      "pid": "1001",
      "image":"https://m.media-amazon.com/images/I/71nz3cIcFOL.jpg",
      "pname": "Acer Gaming Laptop",
      "pdescription": "Price: 1,00,000/-",
      "status": "In Stock",
    },
    {
      "pid": "1001",
      "image":"https://m.media-amazon.com/images/I/71nz3cIcFOL.jpg",
      "pname": "Acer Gaming Laptop",
      "pdescription": "Price: 1,00,000/-",
      "status": "In Stock",
    },
    {
      "pid": "1001",
      "image":"https://m.media-amazon.com/images/I/71nz3cIcFOL.jpg",
      "pname": "Acer Gaming Laptop",
      "pdescription": "Price: 1,00,000/-",
      "status": "In Stock",
    },
    {
      "pid": "1001",
      "image":"https://m.media-amazon.com/images/I/71nz3cIcFOL.jpg",
      "pname": "Acer Gaming Laptop",
      "pdescription": "Price: 1,00,000/-",
      "status": "In Stock",
    },
    {
      "pid": "1001",
      "image":"https://m.media-amazon.com/images/I/71nz3cIcFOL.jpg",
      "pname": "Acer Gaming Laptop",
      "pdescription": "Price: 1,00,000/-",
      "status": "In Stock",
    },
    {
      "pid": "1001",
      "image":"https://m.media-amazon.com/images/I/71nz3cIcFOL.jpg",
      "pname": "Acer Gaming Laptop",
      "pdescription": "Price: 1,00,000/-",
      "status": "In Stock",
    },
    {
      "pid": "1001",
      "image":"https://m.media-amazon.com/images/I/71nz3cIcFOL.jpg",
      "pname": "Acer Gaming Laptop",
      "pdescription": "Price: 1,00,000/-",
      "status": "In Stock",
    },
    {
      "pid": "1001",
      "image":"https://m.media-amazon.com/images/I/71nz3cIcFOL.jpg",
      "pname": "Acer Gaming Laptop",
      "pdescrption": "Price: 1,00,000/-",
      "status": "In Stock",
    }

  ]*/
  ProductDetails :any  = [
    {
      "pid": "100",
      "pname": "Decor",
      "status": "Active",
      "color": "green",
      "pimage":"https://i.pinimg.com/originals/62/90/bd/6290bdcada4609ffd7c3f1c70a3981ac.png",
      "pdesc":"  Lorem  explicabo magnam, molestias nulla culpa doloribus blanditiis, tempore nihil minima."
    },
    {
      "pid": "101",
      "pname": "Gucci",
      "status": "InActive",
      "color": "red",
      "pimage":"https://image.made-in-china.com/44f3j00TuYQCvoaTVrW/Business-Women-Bag-PU-Leather-Handbag-Designer-Tote-Bag-Black-White-Color-Bag-Wholesale-Handbag-Ladies-Handbag-Designer-Handbag-WDL1202-.jpg",
      "pdesc":"  Lorem ipsum, oloribus blanditiis, tempore nihil minima."
    },
    {
      "pid": "102",
      "pname": "Chanel",
      "status": "Out of Stock",
      "color": "yellow",
      "pimage":"https://cdn.cliqueinc.com/posts/281389/best-designer-wallets-281389-1616619919451-main.700x0c.jpg",
      "pdesc":"  Lorem ipsum, loribus blanditiis, tempore nihil minima."
    },
    {
      "pid": "103",
      "pname": "Suzy",
      "status": "Active",
      "color": "green",
      "pimage":"https://m.media-amazon.com/images/I/61e+T7UqcyL._AC_SL1500_.jpg",
      "pdesc":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, quaerat! Necessitatibus, labore."
    },
    {
      "pid": "104",
      "pname": "Sugar",
      "status": "InActive",
      "color": "red",
      "pimage":"https://image.made-in-china.com/44f3j00TuYQCvoaTVrW/Business-Women-Bag-PU-Leather-Handbag-Designer-Tote-Bag-Black-White-Color-Bag-Wholesale-Handbag-Ladies-Handbag-Designer-Handbag-WDL1202-.jpg",
      "pdesc":"  Lorem ipsum, olestias nulla culpa doloribus blanditiis, tempore nihil minima."
    },
    {
      "pid": "105",
      "pname": "Nyka",
      "status": "Active",
      "color": "green",
      "pimage":"https://cdn.cliqueinc.com/posts/281389/best-designer-wallets-281389-1616619919451-main.700x0c.jpg",
      "pdesc":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, quaerat! Necessitatibus, labore."
    },
    {
      "pid": "106",
      "pname": "Beethoven",
      "status": "Out of Stock",
      "color": "yellow",
      "pimage":"https://m.media-amazon.com/images/I/61e+T7UqcyL._AC_SL1500_.jpg",
      "pdesc":" Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, quaerat! Necessitatibus, labore."
    },
    {
      "pid": "107",
      "pname": "Zara",
      "status": "Out of Stock",
      "color": "yellow",
      "pimage":"https://cdn.cliqueinc.com/posts/281389/best-designer-wallets-281389-1616619919451-main.700x0c.jpg",
      "pdesc":"  Lorem ipsum, dolor plicabo magnam, molestias nulla culpa doloribus blanditiis, tempore nihil minima."
    },
    {
      "pid": "108",
      "pname": "Shizel",
      "status": "Out of Stock",
      "color": "yellow",
      "pimage":"https://image.made-in-china.com/44f3j00TuYQCvoaTVrW/Business-Women-Bag-PU-Leather-Handbag-Designer-Tote-Bag-Black-White-Color-Bag-Wholesale-Handbag-Ladies-Handbag-Designer-Handbag-WDL1202-.jpg",
      "pdesc":" Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, quaerat! Necessitatibus, labore."
    }
  ]

  ngOnInit(): void {
  }

}
