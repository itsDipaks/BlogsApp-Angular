import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { AddBlogsComponent } from './add-blogs/add-blogs.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
{
component:HomeComponent,
path:""
},
{
component:AboutComponent,
path:"about"
},

{
component:AddBlogsComponent,
path:"addblog"
},
{
  component:LoginComponent,
  path:"login"
  },
{
  component:SignupComponent,
  path:"signup"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
