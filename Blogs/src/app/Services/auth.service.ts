import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url:string = "http://localhost:8100/auth/";
  constructor(private router:Router,private http:HttpClient) { }


  setToken(res:any){
localStorage.setItem("token",res.token)
  }

  getToken():string | null{
    return localStorage.getItem("token")
  }
  signup(user:any){
    return this.http.post(this.url+"signup", user)
}
  isLoggedIn(){
    return this.getToken() !=null
  }


  login(user:string){
    return this.http.post(this.url+"login", user)
}


logout(){
  localStorage.removeItem("token")
  this.router.navigate(["login"])
}
}
