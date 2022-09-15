import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  usernameentered: string=' '  //username
 

  //Event
  searchuser(user_name:string):void{ //username
    if(!user_name)
    {
      this.usernameentered=' ';
      
    }
    this.usernameentered=user_name; //username
   
    console.log(user_name)
    
  }
  
  

  ngOnInit(): void {
  }

}
