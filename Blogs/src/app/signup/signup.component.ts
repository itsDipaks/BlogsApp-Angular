import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/Services/User.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  SignupData: any
  constructor(private Use: UserService, private router: Router) {

  }


  submitSignupData() {
    this.Use.addUser(this.SignupData.value).subscribe(res => {
     
      if (res) {
        this.router.navigateByUrl('login');
      }
    }
    )
 
  }
  ngOnInit() {
    this.SignupData = new FormGroup({
      name: new FormControl(null, { validators: Validators.required }),
      email: new FormControl(null, { validators: [Validators.required,Validators.email] }),
      password: new FormControl(null, { validators: [Validators.required,Validators.minLength(5)] }),
    })


  }
}