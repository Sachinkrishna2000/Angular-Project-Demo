import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import{Router} from "@angular/router";
import { environment } from 'src/environments/environment';
import { Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedbackurl = environment.feedbackapi;
  registerForm = new FormGroup({
    username: new FormControl(''),
    useremail: new FormControl(''),
    comment: new FormControl('')
  })

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }
  submitted = false;

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required, Validators.pattern('[A-Za-z]*'), Validators.minLength(6), Validators.maxLength(16)],
      useremail: ['', Validators.required],
      feedback: ['', Validators.required],
      
    });
  }
  get f() { return this.registerForm.controls; }
    submitHandler() {
      this.submitted = true;
      if (this.registerForm.invalid) {
        return;
      }
     
  
      this.http.post<any>(this.feedbackurl, this.registerForm.value)
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
            title: 'Thank You For Your Feedback'
          })
          this.registerForm.reset();
          this.router.navigate(['feedback']);
        })
  
    }

}
