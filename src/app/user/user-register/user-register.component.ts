/*
Template-Driven Form: Application logic flows from Template->TS File
Reactive formL Application logic flows from TS File ->Template
*/
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css',
})
export class UserRegisterComponent implements OnInit {
  registrationForm: FormGroup;
  constructor() { }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.registrationForm = new FormGroup({
      username: new FormControl<string>('',[Validators.required]),
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
      confirmPassword: new FormControl(null, [Validators.required]),
      mobileNo: new FormControl(null, [
        Validators.required,
        Validators.maxLength(10),
      ]),
    });
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
  onSubmit() {
    alert('Your form is submitted');
    console.log(this.registrationForm);
  }
}
