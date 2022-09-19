import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }
  usernameentered: string=' ';  //username
  passwordentered: string=' ';

  //Event
  searchuser(user_name:string,pass_word:string):void{ //username
    if(!user_name)
    {
      this.usernameentered=' ';
      
    }
    else if(!pass_word){
      this.passwordentered=' ';
    }
    
      this.usernameentered=user_name; //username
      this.passwordentered=pass_word;
    
    
    
   
    console.log(this.usernameentered)
    console.log(this.passwordentered)
  }
  sendmsg(){
    
    alert("Thank You For Your Valuable Feedback");
    
  }
  

  ngOnInit(): void {
  }
 

}
