import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { faUnlock } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  SignupData: any
  faUnlock=faUnlock
  loading: boolean = false
  constructor(private Use: AuthService, private router: Router) {

  }


  submitSignupData() {

    this.loading = true

    this.Use.signup(this.SignupData.value).subscribe((res:any) => {
      if (res.msg=="User Already Exist With this Email Plase Login !!") {
        this.loading = false
        alert(res.msg)
      
        
      }else{
        this.loading=false
        alert("Signup Sucessfully ")
        this.router.navigateByUrl('login');
      }
    }
    )

  }
  ngOnInit() {
    this.SignupData = new FormGroup({
      name: new FormControl(null, { validators: Validators.required }),
      email: new FormControl(null, { validators: [Validators.required, Validators.email] }),
      password: new FormControl(null, { validators: [Validators.required, Validators.minLength(5)] }),
    })


  }
}