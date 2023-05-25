import { Component } from '@angular/core';
import { FormControl,FormGroup ,Validators} from '@angular/forms';
@Component({
  selector: 'app-add-blogs',
  templateUrl: './add-blogs.component.html',
  styleUrls: ['./add-blogs.component.css']
})
export class AddBlogsComponent {
 

BlogData:any
 
SubmitBlogData(){
  console.log(this.BlogData)
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