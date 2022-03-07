import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  user:User=new User();
  constructor(
    private fb: FormBuilder,private router:Router,private userService:UserServiceService
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName:['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      userName: ['', [Validators.required]],
      password: ['', [Validators.required,Validators.minLength(8)]],
      confirmPassword: ['',[Validators.required]],
      contactNumber:['',[Validators.required]]
    }
    );
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      //alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      this.user=Object.assign(this.registerForm.value)
      console.table(this.registerForm.value);
      console.log("user"+this.user);
      this.userService.registerUser(this.user).subscribe(data=>{
        alert("Registration done successfully");
              });
      this.router.navigate([''])

    };

    this.registerForm.reset();
  }
}
