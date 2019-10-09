import { Component } from '@angular/core';
import  * as firebase from 'Firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor () {
    // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCBDVIlpuHCMFycLh9d7j3J1bBNrGDR1G0",
    authDomain: "books-fc36f.firebaseapp.com",
    databaseURL: "https://books-fc36f.firebaseio.com",
    projectId: "books-fc36f",
    storageBucket: "",
    messagingSenderId: "282486730514",
    appId: "1:282486730514:web:05026a1e6da55b8722cdcb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  }
}
