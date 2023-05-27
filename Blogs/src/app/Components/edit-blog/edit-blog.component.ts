import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/Services/blog.service';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit{
  loading: boolean = false;
  UpdatedBlogData :any=new FormGroup({
    title:new FormControl(""),
    content:new FormControl(""),
    imageurl:new FormControl(""),
    Category:new FormControl("")
    })

constructor(private activRout:ActivatedRoute ,private blog:BlogService){
}

ngOnInit(): void {
  const id = this.activRout.snapshot.params['id'];
  this.blog.getsinleBlog(id).subscribe((res:any)=>{
  this.UpdatedBlogData=new FormGroup({
    title:new FormControl( res.title,{validators:[Validators.required]}),
    content:new FormControl( res.content,{validators:[Validators.required]}),
    imageurl:new FormControl(res.imageurl,{validators:[Validators.required]} ),
    Category:new FormControl(res.Category,{validators:[Validators.required]} ),
    })
  })
}


  UpdateBlog(){
    this.loading = true; 
    console.log(this.UpdatedBlogData.value )
    const id = this.activRout.snapshot.params['id'];
    this.blog.updateBlog(id ,this.UpdatedBlogData.value).subscribe(res=>{
      if(res){
        alert("updated")
      }else{
        alert("not updated")
      }
      this.loading = false; 
        })
        
  }
}
