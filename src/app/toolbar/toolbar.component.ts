import { Component, OnInit, Output } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { AuthServiceService } from '../services/auth-service.service';
import { EventEmitter } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from "@angular/router";


@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  isSignedIn= false;
  // isLoggedIn= false;
  showFiller = false;

  home:boolean=true;
  login:boolean=true;
  blogout:boolean=false;


  pageFunction(){
    this.home=false;
    // this.isSignedIn = false
}

@Output() isLogout = new EventEmitter
  constructor(public dialog: MatDialog,  public authservice: AuthServiceService,
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router
    ) { }

  openDialog() {
    this.dialog.open(LoginComponent);
    this.blogout=true;
    this.login= false;
    this.isSignedIn = false;
    // this.isLoggedIn = false;
  }

  handleLogout(){
    this.isSignedIn = false;
    this.blogout=false;
    // this.login=false;
  }

    ngOnInit() {
    if(localStorage.getItem('user') != null)
    this.isSignedIn = true
    else
    this.isSignedIn = false
   }

  
  logout(){
    // this.authservice.logout()
    this.isLogout.emit()
    this.blogout=false;
    this.login=true;
    // this.isSignedIn = false
  }



// Sign out 
async SignOut() {
  await this.afAuth.signOut();
  localStorage.removeItem('user');
  this.router.navigate(['login']);
}


}

