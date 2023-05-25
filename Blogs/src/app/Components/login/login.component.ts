import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/Services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  faLock=faLock
constructor(private Use:AuthService,private router:Router){

}
 
getLogindata (event:any,data:any){
  event.preventDefault();
this.Use.login(data.value).subscribe((res:any )=>{
  try{
    this.Use.setToken(res.token)
    this.router.navigate(['/'])
  }catch(err){
    alert("login faild")
    this.router.navigate(['/'])
  }
})
}
}
