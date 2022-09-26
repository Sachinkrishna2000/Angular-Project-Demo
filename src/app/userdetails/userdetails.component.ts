import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserModel } from '../user-model';
import { UserapiService } from '../userapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  formValue!: FormGroup;
  userModelObj : UserModel = new UserModel();
  userData!: any;
  showAdd!: boolean;
  showUpdate!: boolean;
  constructor(private formbuilder: FormBuilder, private api:UserapiService, private router:Router) { }
  submitted = false;

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      username:['',[Validators.required, Validators.pattern('[A-Za-z]*'), Validators.minLength(4), Validators.maxLength(16)]],
      useremail:['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password:['',[Validators.required, Validators.minLength(6)]],
      mobile:['',[Validators.required, Validators.pattern('[0-9]*')]]
    })
    this.getUsers();
  }
   get f() { return this.formValue.controls; }
  /*submitHandler() {
    this.submitted = true;
    if (this.formValue.invalid) {
      return;
    }
  }*/
  clickAddProduct(){
    
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  postUserDetails(){
    this.userModelObj.username = this.formValue.value.username;
    this.userModelObj.useremail = this.formValue.value.useremail;
    this.userModelObj.password = this.formValue.value.password;
    this.userModelObj.mobile = this.formValue.value.mobile;
    
    if (this.formValue.invalid) {
      return;
    }
    this.api.postUser(this.userModelObj).subscribe(res=>{
      console.log(res);
      alert("New User added successfully!")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getUsers();
    },
    err=>{
      alert("Something went wrong. Please check again!")
    })
  }

  getUsers(){
    this.api.getUserDetails().subscribe(res=>{
      this.userData = res;
    }, err=>{
      
    })
  }

  deleteUsers(product: any){
    this.api.deleteUser(product.id).subscribe(res=>{
      alert("The User is deleted!")
      this.getUsers();
    }), 
    ({

    })
  }

  onEdit(product: any){
    this.showAdd = false;
    this.showUpdate = true;
    this.userModelObj.id = product.id;
    this.formValue.controls['username'].setValue(product.username);
    this.formValue.controls['useremail'].setValue(product.useremail);
    this.formValue.controls['password'].setValue(product.password);
    this.formValue.controls['mobile'].setValue(product.mobile);
    
  }

  updateUserDetails(){
    this.userModelObj.username = this.formValue.value.username;
    this.userModelObj.useremail = this.formValue.value.useremail;
    this.userModelObj.password = this.formValue.value.password;
    this.userModelObj.mobile = this.formValue.value.mobile;
    if (this.formValue.invalid) {
      return;
    }
  
    this.api.updateUser(this.userModelObj, this.userModelObj.id).subscribe(res=>{
      alert("The User is updated!")

      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getUsers();
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

