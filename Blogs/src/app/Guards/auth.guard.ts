import {   Router  } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class authGuard {

  constructor(private router: Router) {}

  canActivate( ): boolean {
    let token = localStorage.getItem("token");
    if (token) {
      return true;
    } else {
      // Navigate to the login page
      alert("Access Denied !! Please Login !")
      this.router.navigate(['/login']);
      return false;
    }
  }
}
