import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
UsersData:any={}
getLogindata(event:any,data:any){
  event.preventDefault();
console.log(data.value)
}
}
