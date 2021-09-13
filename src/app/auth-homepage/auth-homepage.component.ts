import { Component, OnInit, Output } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { AuthServiceService } from '../services/auth-service.service';
import { EventEmitter } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-homepage',
  templateUrl: './auth-homepage.component.html',
  styleUrls: ['./auth-homepage.component.css']
})
export class AuthHomepageComponent implements OnInit {

 
  // home:boolean=true;
  errorMessage: string | undefined;
  successMessage: string | undefined;


//   pageFunction(){
//     this.home=false
// }

@Output() isLogout = new EventEmitter
  constructor(public dialog: MatDialog, 
     public authservice: AuthServiceService,
     public afs: AngularFirestore,   // Inject Firestore service
     public afAuth: AngularFireAuth, // Inject Firebase auth service
     public router: Router) { }
 
 
 
  openDialog() {
    this.dialog.open(LoginComponent);
  }



  ngOnInit() {
    // this.logout()
    // this.login()
  }

      //   Sign out 
      // async SignOut() {
      //   await this.afAuth.signOut();
      //   localStorage.removeItem('user');
      //   this.router.navigate(['login']);
      // }
      
          logout(){
            return this.authservice.SignOut()
             }


        login(){
          return this.authservice
        }

}
