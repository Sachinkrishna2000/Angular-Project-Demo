import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserapiService {

  constructor(private http:HttpClient) { }
  userurl = environment.userapi;
  postUser(data:any){
    return this.http.post<any>(this.userurl, data).pipe(map((res:any)=>{
      return res;
    }))
  }

  getUserDetails(){
    return this.http.get<any>(this.userurl).pipe(map((res:any)=>{
      return res;
    }))
  }

  updateUser(data:any, id:number){
    return this.http.put<any>(this.userurl+'/'+id, data).pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteUser(id:number){
    return this.http.delete<any>(this.userurl+'/'+id).pipe(map((res:any)=>{
      return res;
    }))
  }
}
