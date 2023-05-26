import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  url:string = "http://localhost:8100/blog/";
  constructor(private http:HttpClient,private router:Router,private use:AuthService) {
   }

   
getallblog(){
return this.http.get(this.url+"allblogs")
}

addblog(data:any){
  let token:any=this.use.getToken()
  const headers = new HttpHeaders().set("token",token);
  return this.http.post(this.url+"add",data,{headers})
}

}
