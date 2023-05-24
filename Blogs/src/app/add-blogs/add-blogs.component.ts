import { Component } from '@angular/core';

@Component({
  selector: 'app-add-blogs',
  templateUrl: './add-blogs.component.html',
  styleUrls: ['./add-blogs.component.css']
})
export class AddBlogsComponent {
 BlogData= {
    title : "Blog Title",
    content : "",
    imageurl : "",
  }
}
