import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  url: string = "https://blogifiy-86v6.onrender.com/blog/";
  constructor(private http: HttpClient, private router: Router, private use: AuthService) {
  }
  //  -----Add New Blog ----
  addblog(data: any) {
    let token: any = this.use.getToken()
    const headers = new HttpHeaders().set("token", token);
    return this.http.post(this.url + "add", data, { headers })
  }
  //  -----Get All Blogs ----
  getallblog() {
    return this.http.get(this.url + "allblogs")
  }
  // ----- Get User All Blogs ------
  getusersBlog() {
    let token: any = this.use.getToken()
    const headers = new HttpHeaders().set("token", token);
    return this.http.get(this.url + "usersblogs", { headers })
  }
  getsinleBlog(blogid: string) {
    return this.http.get(this.url + "selectedblog" + `/${blogid}`)
  }
  // -----Update Selected Blog-----
  updateBlog(blogid: string, updatedcontent: any) {
    let token: any = this.use.getToken()
    const headers = new HttpHeaders().set("token", token);
    return this.http.put(this.url + "updateblog" + `/${blogid}`, updatedcontent, { headers })
  }

  //  -----Delete selected Blog ----
  deleteBlog(blogid: string) {
    let token: any = this.use.getToken()
    const headers = new HttpHeaders().set("token", token);
    return this.http.delete(this.url + "deleteblog" + `/${blogid}`, { headers })
  }

}
