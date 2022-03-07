import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userName:string='';
  user:User=new User();
  constructor(private router:Router,private userService:UserServiceService) { }

  ngOnInit(): void {
    this.userName = sessionStorage.getItem('userName')||'';
    console.log(this.userName);
     if(this.userName != null)
     {
       this.userService.getUserDetail(this.userName).subscribe((data)=>
       {
        this.user = Object.assign(data);
        console.log(this.user.firstName);
        console.log(this.user.email)

       });

     }
     else
     {
       this.router.navigate(['']);
     }
  }
  logout()
  {

    this.router.navigate(['/logout']);
  }

  openYourTweets()
  {
    this.router.navigate(['tweet/show-my-tweet']);
  }

}
