import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-view-all-users',
  templateUrl: './view-all-users.component.html',
  styleUrls: ['./view-all-users.component.css']
})
export class ViewAllUsersComponent implements OnInit {

  constructor(private userservice: UserServiceService) { }
  allUsers: User[] =[];
  ngOnInit(): void {
    this.userservice.getAllUsers().subscribe(data => {
      if(data!==null){
        this.allUsers=data;
        console.log(this.allUsers);
      }
    });

  }

}
