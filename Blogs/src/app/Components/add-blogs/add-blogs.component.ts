import { Component } from '@angular/core';
import { FormControl,FormGroup ,Validators} from '@angular/forms';
import { BlogService } from 'src/app/Services/blog.service';
@Component({
  selector: 'app-add-blogs',
  templateUrl: './add-blogs.component.html',
  styleUrls: ['./add-blogs.component.css']
})
export class AddBlogsComponent {
 constructor(private blog:BlogService){

 }

BlogData:any
 
SubmitBlogData(){
  this.blog.addblog(this.BlogData).subscribe(res=>{
    console.log(res)
  })

}

ngOnInit() {
this.BlogData=new FormGroup({
title:new FormControl(null,{validators:[Validators.required]}),
content:new FormControl(null,{validators:[Validators.required]}),
imageurl:new FormControl(null,{validators:[Validators.required]}),
Category:new FormControl(null,{validators:[Validators.required]}),
})

}
}