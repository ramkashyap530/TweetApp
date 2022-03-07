import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  applicationUrl="http://3.139.44.90:8080/TweetApplication/api/v1.0/tweets";
  constructor(private httpClient:HttpClient) {
  }

  public registerUser(user: any){
    return this.httpClient.post<User>(this.applicationUrl+"/register",user);
  }

  public validateLoginUser(user:any){
    return this.httpClient.post<User>(this.applicationUrl+"/login",user);
  }

  public updatePassword(user:any,userName:string){
    console.log(this.httpClient.post<User>(this.applicationUrl+"/"+userName+"/forgot",user))
    return this.httpClient.post<User>(this.applicationUrl+"/"+userName+"/forgot",user);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('userName');
    console.log(!(user === null));
    return !(user === null)
  }

  public getAllUsers(){
    return this.httpClient.get<User[]>(this.applicationUrl+"/user/all");
  }

  public getUserDetail(userName:any){
    return this.httpClient.get<User>(this.applicationUrl+"/user/search/"+userName);
  }
}
