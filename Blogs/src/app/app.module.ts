import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CaraouselCompo } from './SmallComponents/carousel.component';
import { BlogdetailsComponent } from './Components/blogdetails/blogdetails.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { AddBlogsComponent } from './Components/add-blogs/add-blogs.component';
import { SignupComponent } from './Components/signup/signup.component';
import { AuthService } from './Services/auth.service';
import { MyblogsComponent } from './Components/myblogs/myblogs.component';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { EditBlogComponent } from './Components/edit-blog/edit-blog.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { DisplayErrorComponent } from './SmallComponents/display-error.component';
import { AboutComponent } from './Components/about/about.component';
import { FilterPipe } from './pipes/filter.pipe';
import { TostComponent } from './SmallComponents/tost/tost.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    AddBlogsComponent,
    SignupComponent,
    CaraouselCompo,
    BlogdetailsComponent,
    NotfoundComponent,
    MyblogsComponent,
    UserProfileComponent,
    EditBlogComponent,
    FooterComponent,
    DisplayErrorComponent,
    AboutComponent,
    FilterPipe,
    TostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule, FontAwesomeModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
