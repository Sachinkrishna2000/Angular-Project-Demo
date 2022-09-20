import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }
  contact: Contact[] =[
    {
      "pdesc":"We at TachKart provide quality goods, services at an afforadable price and strive towards excellence.",
      "plink1":"Home",
      "plink2":"About",
      "plink3":"Products",
      "plink4":"SignUp",
      "product1":"Mobile & Laptops",
      "product2":"Home Appliances",
      "product3":"Sports & Music",
      "product4":"Help",
      "address":"177A Bleecker Street, New York City",
      "email":"www.techkart.com",
      "phone":"+91 080 2355456"
  }
  
  ];
  public getContactDetails(): any {
    const contactObservable = new Observable(observe => {
      setTimeout(() => {
        observe.next(this.contact);
      }, 1000);
    });
    return contactObservable;
  }
}
