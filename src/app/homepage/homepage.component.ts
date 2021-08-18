import { Component, OnInit, Output } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { AuthServiceService } from '../services/auth-service.service';
import { EventEmitter } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
//email validator
// import {FormControl, FormGroup  } from '@angular/forms';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {


  home:boolean=true;
  errorMessage: string | undefined;
  successMessage: string | undefined;


  pageFunction(){
    this.home=false
}

@Output() isLogout = new EventEmitter
  constructor(public dialog: MatDialog, 
     public authservice: AuthServiceService,
     public afs: AngularFirestore,   // Inject Firestore service
     public afAuth: AngularFireAuth, // Inject Firebase auth service
     public router: Router) { }
 
 
 
  openDialog() {
    this.dialog.open(LoginComponent);
  }



  ngOnInit(): void {
  }

      //   Sign out 
      async SignOut() {
        await this.afAuth.signOut();
        localStorage.removeItem('user');
        this.router.navigate(['login']);
      }
      


}
