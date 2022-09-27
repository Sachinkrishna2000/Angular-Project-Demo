import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-feedbackdetails',
  templateUrl: './feedbackdetails.component.html',
  styleUrls: ['./feedbackdetails.component.css']
})
export class FeedbackdetailsComponent implements OnInit {

  productData!: any;
  constructor(private http:HttpClient,private router:Router) { }
  feedbackurl = environment.feedbackapi;

  getProductDetails(){
    return this.http.get<any>(this.feedbackurl).pipe(map((res:any)=>{
      return res;
    }))
  }
  getProducts(){
    this.getProductDetails().subscribe(res=>{
      this.productData = res;
    }, err=>{
      
    })
  }

 
  ngOnInit(): void {
    this.getProducts();
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
