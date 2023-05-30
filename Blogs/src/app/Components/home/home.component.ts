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
  loading:boolean=false
  setSelectedTag(tag: string): void {
    this.loading=true
    this.selectedTag = tag;
    this.loading=false
  }
  constructor(private blog: BlogService) {
  }
  ngOnInit() {
    this.loading=true
    this.blog.getallblog().subscribe(res =>{this.loading=false 
      return this.blogs=res})
  }



}