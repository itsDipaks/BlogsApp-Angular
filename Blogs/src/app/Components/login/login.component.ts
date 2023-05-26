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
  loading:boolean=false
  faLock=faLock
constructor(private Use:AuthService,private router:Router){

}
 
getLogindata (event:any,data:any){
  event.preventDefault();
  this.loading=true
  try{
    this.Use.login(data.value).subscribe((res:any )=>{
      console.log(res)
        this.Use.setToken(res.token)
        this.loading=false
        this.router.navigate(['/'])
    })
  }catch(err){
        alert("login faild")
        this.loading=false
        this.router.navigate(['/'])
  }

}
}
