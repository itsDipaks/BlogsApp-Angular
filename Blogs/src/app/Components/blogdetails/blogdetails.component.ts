import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/Services/blog.service';

@Component({
  selector: 'app-blogdetails',
  templateUrl: './blogdetails.component.html',
  styleUrls: ['./blogdetails.component.css']
})
export class BlogdetailsComponent implements OnInit{
blogdata:any={}

  constructor(private activRout:ActivatedRoute,private blog:BlogService){
}

ngOnInit(): void {
  const id = this.activRout.snapshot.params['id'];
  this.blog.getsinleBlog(id).subscribe((res:any)=>{
this.blogdata=res
  } )
}
}
