import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/Services/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{

  constructor(private blog:BlogService){
  }

  ngOnInit(): void {
  this.blog.getallblog().subscribe(res=>{
    console.log(res)
  })
  }
}
