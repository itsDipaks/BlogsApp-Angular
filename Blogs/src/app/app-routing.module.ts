import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogdetailsComponent } from './Components/blogdetails/blogdetails.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { HomeComponent } from './Components/home/home.component';
import { AddBlogsComponent } from './Components/add-blogs/add-blogs.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { authGuard } from './Guards/auth.guard';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { MyblogsComponent } from './Components/myblogs/myblogs.component';
import { EditBlogComponent } from './Components/edit-blog/edit-blog.component';
import { AboutComponent } from './Components/about/about.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: ""
  },
  {
    component: AboutComponent,
    path: "about"
  },
  {
    component: AddBlogsComponent,
    path: "user-addblog",canActivate:[authGuard]
  },
  {
    component: MyblogsComponent,
    path: "user-blogs",canActivate:[authGuard]
  },
  {
    component: UserProfileComponent,
    path: "user-profile",canActivate:[authGuard]
  },
  {
    component: EditBlogComponent,
    path: "user-updateblog/:id",canActivate:[authGuard]
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
    path: "blogdetails/:id" 
  },
  {
    component: BlogdetailsComponent,
    path:"user-blogs/blogdetails/:id"
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
