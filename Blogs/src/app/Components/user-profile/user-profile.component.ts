import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  Myprofile:any={}
  constructor(private auth:AuthService){

  }
ngOnInit(): void {
  this.auth.getUserProfile().subscribe((res:any)=>{
    this.Myprofile=res
  })
}



}
