import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/Services/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  blogs: any = [];
  selectedTag: string = 'All';
  error:string="No Blogs are present "
  setSelectedTag(tag: string): void {
    this.selectedTag = tag;
  }

  constructor(private blog: BlogService) {
  }

  ngOnInit() {
    this.blog.getallblog().subscribe(res =>this.blogs=res)
  }



}