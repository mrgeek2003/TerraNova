import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../../service/alertyfy/alertify.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  constructor() {}
  loggedInUsers: string;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  
  loggedIn() {
    this.loggedInUsers= localStorage.getItem('token') as string
    return this.loggedInUsers
  }
  onLogout() {
    localStorage.removeItem('token');
  }
}
