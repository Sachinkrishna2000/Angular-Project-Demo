import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(private contactservice:ContactService) { }
  contact: Contact[]=[];

  ngOnInit(): void {
    const contactObservable= this.contactservice.getContactDetails();
    contactObservable.subscribe((contactData: Contact[])=>{
      this.contact=contactData;
    });
  }

}
