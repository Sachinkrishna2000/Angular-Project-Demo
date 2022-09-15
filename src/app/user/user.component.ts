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

  _username:any | undefined;
  

  //To pass information between components we have @Input and @Output

  @Input('usern')//username

  //write
  set uname(uname:any) //username
  {
    this._username=uname || 'Enter Credentials';
    console.log(uname)
  }
  //read
  get uname():string
  {
    return this._username;
  }


}
