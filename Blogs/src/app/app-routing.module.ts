import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogdetailsComponent } from './Components/blogdetails/blogdetails.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { HomeComponent } from './Components/home/home.component';
import { AddBlogsComponent } from './Components/add-blogs/add-blogs.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { authGuard } from './Guards/auth.guard';

const routes: Routes = [
  {
    component: HomeComponent,
    path: ""
  },

  {
    component: AddBlogsComponent,
    path: "addblog",canActivate:[authGuard]
  },
  {
    component: LoginComponent,
    path: "login"
  },
  {
    component: SignupComponent,
    path: "signup"
  },
  {
    component: BlogdetailsComponent,
    path: "blogdetails"
  },
  {
    component: NotfoundComponent,
    path: "**"
  },
  // {
  //   path:'', redirectTo:"/login",
  //   pathMatch: "full"
  // },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
