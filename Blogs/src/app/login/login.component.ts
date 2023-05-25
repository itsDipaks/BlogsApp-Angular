import { Component } from '@angular/core';
import { UserService } from 'src/Services/User.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
constructor(private Use:UserService){

}
getLogindata(event:any,data:any){
  event.preventDefault();
this.Use.login(data.value).subscribe(res=>{
  console.log(res)
})


}
}
