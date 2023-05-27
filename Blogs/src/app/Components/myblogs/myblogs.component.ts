import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/Services/blog.service';

@Component({
  selector: 'app-myblogs',
  templateUrl: './myblogs.component.html',
  styleUrls: ['./myblogs.component.css']
})
export class MyblogsComponent implements OnInit {
  UsersBlogs: any = []
  constructor(private blog: BlogService) {

  }
  deltedthisblog(id: string) {
    this.blog.deleteBlog(id).subscribe((res: any) => {
      if (res) {
        this.getmyblogs()
      }
    })
  }


  ngOnInit(): void {
    this.getmyblogs()
  }

  getmyblogs() {
    this.blog.getusersBlog().subscribe(res => this.UsersBlogs = res)
  }
}
