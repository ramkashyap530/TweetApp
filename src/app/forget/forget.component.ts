import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {
  updateForm!: FormGroup;
  user:User=new User();
  passChange: boolean = false;
  constructor(private fb: FormBuilder,private router: Router, private loginservice: UserServiceService) { }

  ngOnInit(): void {
    this.updateForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required,Validators.minLength(8)]],
      confirmPassword:['',[Validators.required]]
    });
  }
  get updateFormControl() {
    return this.updateForm.controls;
  }

  onSubmit(){
    console.log(this.updateForm.valid)
    if(this.updateForm.valid)
    {
       this.user=Object.assign(this.updateForm.value);

       this.loginservice.updatePassword(this.user,this.user.userName).subscribe(data=>{
         this.user=Object.assign(data)
         if(this.user.userName===null){
          this.passChange=true;
         }else{
          this.router.navigate(['/login'])
         }
       })
    }
  }
}
