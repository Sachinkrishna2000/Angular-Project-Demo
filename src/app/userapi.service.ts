import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserapiService {

  constructor(private http:HttpClient) { }
  postUser(data:any){
    return this.http.post<any>("http://localhost:3000/users", data).pipe(map((res:any)=>{
      return res;
    }))
  }

  getUserDetails(){
    return this.http.get<any>("http://localhost:3000/users").pipe(map((res:any)=>{
      return res;
    }))
  }

  updateUser(data:any, id:number){
    return this.http.put<any>("http://localhost:3000/users/"+id, data).pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteUser(id:number){
    return this.http.delete<any>("http://localhost:3000/users/"+id).pipe(map((res:any)=>{
      return res;
    }))
  }
}