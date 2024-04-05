import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }
  addUser(user: User) {
    let users: any[] = [];
  
    const storedUsers = localStorage.getItem('Users');
  
    if (storedUsers) {
        users = JSON.parse(storedUsers);
    }
  
    users.push(user); // Add the new user to the array
  
    localStorage.setItem('Users', JSON.stringify(users)); // Store the updated users array
  }
}
