
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
 
@Injectable()
export class UserService{
    url:string = "http://localhost:8100/auth/";
    constructor(private http:HttpClient){
        //empty
    }
 
    // read
    // getAllUsers(){
    //     return this.http.get(this.url+"data")
    // }
    // create
    addUser(user:any){
        return this.http.post(this.url+"signup", user)
    }
    login(user:any){
        return this.http.post(this.url+"login", user)
    }
    // // read to update
    // getUserToUpdate(userid:any){
    //     return this.http.get(this.url+"edit/"+userid);
    // }
    // // update
    // updateUser(user:any){
    //     return this.http.put(this.url+"edit/"+user._id, user);
    // }
    // // delete
    // deleteUser(userid:any){
    //     return this.http.delete(this.url+"delete/"+userid);
    // }
 
}