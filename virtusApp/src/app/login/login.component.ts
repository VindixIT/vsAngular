import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
//import { Role } from '../models/role';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{
  isFormInvalid = false;
  areCredentialsInvalid = false;
  //Role = Role;
  constructor(private router: Router, private authService: AuthService) { }
  //login(role:Role) {
    //this.authService.login(role);
    //this.router.navigate(['/login']);
  //}
  ngOnInit(): void {
  }

  onSubmit(signInForm:NgForm){
    if(!signInForm.valid){
      this.isFormInvalid = true;
      this.areCredentialsInvalid = false;
      return;
    }
    this.checkCredentials(signInForm);
      
  }
  private checkCredentials(signInForm:NgForm){
    const user = new User(signInForm.value.email, signInForm.value.password);
    if(!this.authService.authenticate(user)){
      this.isFormInvalid = false;
      this.areCredentialsInvalid = true;
    }
  }


  }