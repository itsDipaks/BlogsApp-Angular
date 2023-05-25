import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddBlogsComponent } from './add-blogs/add-blogs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { UserService } from 'src/Services/User.service';
import { CaraouselCompo } from './SmallComponents/carousel.component';
import { BlogdetailsComponent } from './blogdetails/blogdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    HomeComponent,
    AddBlogsComponent,
    SignupComponent,
    CaraouselCompo,
    BlogdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
