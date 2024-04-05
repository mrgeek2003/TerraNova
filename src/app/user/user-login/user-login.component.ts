import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../../service/authentication/authentication.service';
import { AlertifyService } from '../../service/alertyfy/alertify.service';
import { Router } from '@angular/router';
import { User } from '../../model/user';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit{
  constructor(private authService:AuthenticationService,private alertify:AlertifyService,private router:Router){}
  ngOnInit(): void {
  }
  onLogin(loginForm:NgForm){
   console.log(loginForm.value)
   let token=this.authService.authUser(loginForm.value)
   if(token){
    localStorage.setItem('token',token.userName)
    console.log('Login Successful :)')
    this.alertify.success('Login Successful :)')
    this.router.navigate(['/']) // This will redirect user to the base URL
   }
   else{
    console.log('Login credentials are not matching :(')
    this.alertify.error('Login credentials are not matching :(')
   }
  }

}

