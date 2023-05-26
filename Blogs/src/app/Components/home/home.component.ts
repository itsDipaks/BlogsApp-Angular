import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/Services/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  blogs: any = [];


  constructor(private blog: BlogService) {
    console.log(this.blogs)
  }

  ngOnInit() {
    this.blog.getallblog().subscribe(res =>this.blogs=res)
  }



}