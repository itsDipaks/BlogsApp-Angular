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
      if(res.msg=="User Not Found Please Signup!!" || res.msg=="Authentication Faild please Check your Password"){
   alert(res.msg)

        this.loading=false
      }else{
        this.Use.setToken(res.token)
     alert("login Sucess")
    
        this.loading=false
        this.router.navigate(['/'])
      }
    })
  }catch(err){
    // console.log(err,"error from catch")
    //     alert("login faild")
      
        // this.router.navigate(['/'])
  }

}
}
