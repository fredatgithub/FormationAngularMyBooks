import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { resolve } from 'url';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  createUser(email:string, password: string){
    return new Promise((resolve, reject) => {
      firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => resolve())
      .catch(error => reject(error))
    });
  }

  singinUser(email:string, password: string){
    return new Promise((resolve, reject) => {
      firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => resolve())
      .catch(error => reject(error))
    });
  }

  signout(){
    firebase.auth().signOut();
  }
}
