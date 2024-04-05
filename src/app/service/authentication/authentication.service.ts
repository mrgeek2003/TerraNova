import { Injectable } from '@angular/core';
import { User } from '../../model/user';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
  authUser(user:User){
    /*
    NOTES
    Here key Users is been fetched from the local storage which contains record of registered users
    Now using storedUsers variable we can match the credentials.
    */
    let UserArray:User[]=[]
    const storedUsers = localStorage.getItem('Users');
    if(storedUsers!==null){
      UserArray=JSON.parse(storedUsers)      
    }
    return UserArray.find(p=>p.userName===user.userName&&p.password===user.password)
  }
}
