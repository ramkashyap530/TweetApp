import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { UserServiceService } from '../service/user-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  inValidLogin = false;
  submitted = false;
  user: User = new User()
  constructor(private fb: FormBuilder, private router: Router, private loginservice: UserServiceService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  get loginFormControl() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.user = Object.assign(this.loginForm.value);
      console.log(this.user)
      this.loginservice.validateLoginUser(this.user).subscribe(data => {
        if (data === null) {
          console.log(data);
          this.inValidLogin = true;
        } else {

          sessionStorage.setItem('userName', data.userName);
          sessionStorage.setItem('userId', data.userId);
          console.table(this.user.userName_);
          console.table(this.loginForm.get('userName')?.value);
          this.inValidLogin = false;
          alert("login success")
          this.loginForm.reset()
          this.router.navigate(['tweet-main']);
        }
      })
    };

    /* isUserLoggedin(){
       let user=sessionStorage.getItem('username')
       console.log(!(user === null))
       return !(user === null)
     }
     logout(){
       sessionStorage.removeItem('username');
     }*/
  }
  registerPage(){
    this.router.navigate(['register']);
  }
  forgotPassword(){
    this.router.navigate(['forgot'])
  }
  resetForm() {
    this.loginForm.reset();
  }
}
