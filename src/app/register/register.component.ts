import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import{Router} from "@angular/router";
import { environment } from 'src/environments/environment';
import { Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   //public registerForm!:FormGroup;
   userurl = environment.userapi;
   registerForm = new FormGroup({
     username: new FormControl(''),
     useremail: new FormControl(''),
     password: new FormControl(''),
     mobile: new FormControl('')
   })

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }
  submitted = false;
 

  /*myForm: FormGroup | any;
  username: FormControl | any;
  useremail: FormControl | any;
  password: FormControl | any;
  mobile: FormControl | any;
  age: FormControl | any;
  dob: FormControl | any;
  gender: FormControl | any;
  address: FormControl | any;
  payment: FormControl | any;
  agreement:FormControl | any;*/

  ngOnInit(): void {
    /*this.username = new FormControl('', [Validators.required,Validators.pattern('[A-Za-z]*'), Validators.minLength(6), Validators.maxLength(16)]);
    this.useremail = new FormControl('', [Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]);
    this.password = new FormControl('', [Validators.required, Validators.pattern('[A-Za-z0-9]*'), Validators.minLength(8), Validators.maxLength(14)]);
    this.mobile = new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]);
    this.age = new FormControl('',[Validators.required, Validators.min(21), Validators.max(25)]);
    this.dob = new FormControl('', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]);
    this.gender= new FormControl('',[Validators.required]);
    this.address = new FormControl('',[Validators.required, Validators.maxLength(256)]);
    this.payment = new FormControl('',[Validators.required]);
    this.agreement = new FormControl('',[Validators.requiredTrue]);
    this.myForm = new FormGroup({
      'username': this.username,
      'useremail': this.useremail,
      'password': this.password,
      'mobile': this.mobile,
      'age': this.age,
      'dob': this.dob,
      'gender': this.gender,
      'address': this.address,
      'payment':this.payment,
      'agreement':this.agreement })*/

      this.registerForm = this.formBuilder.group({
        username: ['', [Validators.required, Validators.pattern('[A-Za-z]*'), Validators.minLength(4), Validators.maxLength(16)]],
        useremail: ['', [Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        mobile: ['', [Validators.required, Validators.pattern('[0-9]*')]]
      });
    }
    get f() { return this.registerForm.controls; }
    submitHandler() {
      this.submitted = true;
      if (this.registerForm.invalid) {
        return;
      }
     
  
      this.http.post<any>(this.userurl, this.registerForm.value)
        .subscribe(res => {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
          })
      
          Toast.fire({
            icon: 'success',
            title: 'Sign Up Successful'
          })
          this.registerForm.reset();
          this.router.navigate(['login']);
        })
  
    }
      
    
    
   
    
  }
 /*OnSubmit(){
 
  alert("Thank You For Registering");
  this.router.navigate(['/']);
 }*/
    
    
  


