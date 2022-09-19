import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Sport } from './sport';

@Injectable({
  providedIn: 'root'
})
export class SportService {

  constructor() { }
  sport: Sport[] =[
    {
      "pid":1,
      "pname":"Adidas Shoes",
      "pdesc":"Running Shoes, Rubber Grip with Canvas Material, Wash Proof",
      "status":"In Stock",
      "price":2300,
      "pimage":"https://5.imimg.com/data5/SELLER/Default/2021/7/UF/SD/GL/96403645/whatsapp-image-2021-07-24-at-11-41-15-am-250x250.jpeg"
  },
  {
      "pid":2,
      "pname":"Puma Shoes ",
      "pdesc":"Ferrari Design Rubber Shoes, Canvas Material Wash Proof",
      "status":"Few In Stock",
      "price":4500,
      "pimage":"https://5.imimg.com/data5/ANDROID/Default/2021/3/EA/QN/YM/93153508/img-20210324-wa0046-jpg-500x500.jpg"
  },
  {
      "pid":3,
      "pname":"Nike Shoes",
      "pdesc":"Running & Racing Shoes, Canvas Material, Wash Proof ",
      "status":"Out Of Stock",
      "price":2999,
      "pimage":"https://4.imimg.com/data4/IF/HG/ANDROID-56647035/product-500x500.jpeg"
  },
  {
      "pid":4,
      "pname":"Bose Quitecomfort 35",
      "pdesc":"Wireless with Dedicated Mic Noise Cancellation, Bluetooth 5.1",
      "status":"In Stock",
      "price":19999,
      "pimage":"https://m.media-amazon.com/images/I/51JbsHSktkL._SL1500_.jpg"
  },
  {
      "pid":5,
      "pname":"Boat Rockrez 550",
      "pdesc":"Wireless with Mic, 500mAH Battery ,Noise Cancellation",
      "status":"Few In Stock",
      "price":1999,
      "pimage":"https://cdn1.smartprix.com/rx-iybx5LieJ-w1200-h1200/ybx5LieJ.jpg"
  },
  {
      "pid":6,
      "pname":"Skull Candy hesh anc",
      "pdesc":"Wireless Bluetooth with Mic, Noise cancellation, 22Hrs Battery",
      "status":"Out Of Stock",
      "price":9999,
      "pimage":"https://m.media-amazon.com/images/I/81-R7tWdkqL._SL1500_.jpg"
  }
  ];
  public getSportDetails(): any {
    const sportObservable = new Observable(observe => {
      setTimeout(() => {
        observe.next(this.sport);
      }, 1000);
    });
    return sportObservable;
  }
}
