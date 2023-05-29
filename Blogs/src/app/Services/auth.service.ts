import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url: string = "https://blogifiy-86v6.onrender.com/auth/";
  constructor(private router: Router, private http: HttpClient) { }


  // ======Local Storage Related ==============
  setToken(token: any) {

    localStorage.setItem("token", token)
  }

  getToken(): string | null {
    return localStorage.getItem("token")
  }

  // =====Auth Services ===========
  login(user: string) {
    return this.http.post(this.url + "login", user)
  }

  signup(user: any) {
    return this.http.post(this.url + "signup", user)
  }

  logout() {
    localStorage.removeItem("token")
    this.router.navigate(["login"])
  }


  // =========Other ==========
  isLoggedIn() {
    return this.getToken() != null;
  }


getUserProfile(){
  let token: any = this.getToken()
  const headers = new HttpHeaders().set("token", token);
 return this.http.get(this.url+"profile",{headers})
}




}




