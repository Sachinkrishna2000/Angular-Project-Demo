import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //property - _username

  
  


  @Input()usernameentered:any;//username
  @Input()passwordentered:any;//username
  
  //write
  /*set uname(uname:any) //username
  {
    this.usernamee=uname || 'Enter Credentials';
    console.log(uname)
  }
  //read
  get uname():string
  {
    return this.usernamee;
  }

  set pname(pname:any) //username
  {
    this.passwordd=pname || 'Enter Credentials';
    console.log(pname)
  }
  //read
  get pname():string
  {
    return this.passwordd;
  }*/


}
