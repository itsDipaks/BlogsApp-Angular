import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  istoken:boolean=false
  constructor(){
  
  }
  
  ngOnInit(): void {
    let token=localStorage.getItem("token")
    if(token){
      this.istoken=true
    }else{
      this.istoken=false
    }
  }

}
