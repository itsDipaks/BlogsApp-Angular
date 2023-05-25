import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  url:string = "http://localhost:8100/";
  constructor(private http:HttpClient,private router:Router,private use:AuthService) {
   }
getallblog(){

}
addblog(data:any){
  let headers:any=this.use.getToken()
  return this.http.post(this.url+"blog",data,headers)
}

}
