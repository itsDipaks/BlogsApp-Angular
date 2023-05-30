import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  istoken: boolean = true
  constructor(private router: Router,private auth:AuthService) {

  }
  menuType: String = "default"
  hidenav:boolean=false
  ngOnInit(): void {
    console.log("mount")
    this.router.events.subscribe((res: any) => {
      if (res.url) {
        if (localStorage.getItem("token") && res.url.includes("user")) {
          this.menuType = "user"
        } else if(res.url.includes("login") || res.url.includes("signup")) {
          this.menuType = "default"
          this.hidenav=true
        }else{
          this.menuType = "default"
        }
      }
    })
  }

  logoutme(){
    this.auth.logout()
    this.router.navigate(["/"])
  }

}
