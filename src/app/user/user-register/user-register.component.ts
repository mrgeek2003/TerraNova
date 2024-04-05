/*
Template-Driven Form: Application logic flows from Template->TS File
Reactive formL Application logic flows from TS File ->Template
*/
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../../service/user-service.service';
import { User } from '../../model/user';
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css',
})
export class UserRegisterComponent implements OnInit {
  registrationForm: FormGroup;
  user:User
  constructor(private formBuilder:FormBuilder,private userService:UserServiceService) { }
  ngOnInit(): void {    
    this.createRegistrationForm()
  }
  createRegistrationForm(){
    this.registrationForm=this.formBuilder.group({
      username:[null,Validators.required],
      email:[null,[Validators.email, Validators.required]],
      password:[null,[Validators.required,Validators.minLength(8)]],
      confirmPassword:[null,[Validators.required]],
      mobileNo:[null,[Validators.required,Validators.maxLength(10)]]
    })
  }
  passwordMatcher(fg: FormGroup): boolean {
    if (
      fg.controls['password'].value ===
      fg.controls['confirmPassword'].value
    ) {
      console.log('true');
      return true;
    } else {
      
      return false;
    }
  }
  freezeFunction(fg: FormGroup): boolean {
    if (fg.valid && this.passwordMatcher(fg)) {
      return false;
    } else {
      return true;
    }
  }
  
userData():User{
  return this.user={
    userName:this.userName.value,
    email:this.userEmail.value,
    password:this.userPassword.value,
    mobileNo:this.userMobile.value
  }
}
get userName(){
  return this.registrationForm.get('username') as FormControl
}
get userEmail(){
  return this.registrationForm.get('email') as FormControl
}
get userPassword(){
  return this.registrationForm.get('password') as FormControl
}
get userMobile(){
  return this.registrationForm.get('mobile') as FormControl
}

onSubmit() {
  alert('Your form is submitted');
  console.log(this.registrationForm);

  const userValue = this.registrationForm.value; // Get the value of the form

  this.userService.addUser(userValue) // Call addUser with the form value
}

}
