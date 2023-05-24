import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  SignupData:any
constructor(){
  console.log(this.SignupData)
}

submitSignupData(){
  console.log(this.SignupData.value)
}
  ngOnInit(){
    this.SignupData = new FormGroup({
      name : new FormControl(null, { validators : Validators.required }),
      email : new FormControl(null, { validators : [Validators.required] }),
      password : new FormControl(null, { validators : [Validators.required] }),
    })

    
}
}