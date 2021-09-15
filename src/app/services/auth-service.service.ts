import { Injectable, NgZone  } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';
import  auth  from 'firebase/app';


import { User } from '../shared/services/user';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import  firebase from 'firebase/app';
// import { switchMap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {


  user!: Observable<User>
 
  userData: any; // Save logged in user data

      // // Returns true when user is looged in and email is verified
      // get isLoggedIn(): boolean {
      //   const user = JSON.parse(localStorage.getItem('user')!);
      //   return (user !== null) ? true : false;
      // }

  constructor(    
   public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,  
    public ngZone: NgZone // NgZone service to remove outside scope warning 
    ) 
     {
        this.afAuth.authState.subscribe(user => {
              if (user) {
                this.userData = user;
                localStorage.setItem('user', JSON.stringify(this.userData));
                JSON.parse(localStorage.getItem('user')!
                );
              } else {
                localStorage.setItem('user',"email");
                JSON.parse(localStorage.getItem('user')!);
              }
            });
      }


    

    // Sign in with Google
    GoogleAuth() {
      return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
    }

    FacebookAuth() {
      return this.AuthLogin(new firebase.auth.FacebookAuthProvider());
    }

    // Auth logic to run auth providers
      async AuthLogin(provider: any) {
      try {
        const result = await this.afAuth.signInWithPopup(provider);
        this.ngZone.run(() => {
          this.router.navigate(['homepage']);
        });
        this.SetUserData(result.user);
      } catch (error) {
        window.alert(error);
      }
    }

           

    /* Setting up user data when sign in with username/password, 
    sign up with username/password and sign in with social auth  
    provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */

    //: { uid: any; email: any; displayName: any; photoURL: any; emailVerified: any; }
          SetUserData(user : any) {
            const userRef: AngularFirestoreDocument<any> = this.afs.doc('users/${user.uid}');
            const userData: User = {
              uid: user.uid,
              email: user.email,
              displayName: user.displayName,
              photoURL: user.photoURL,
              emailVerified: user.emailVerified
            }
            return userRef.set(userData, {
              merge: true
            });
          }

          // Sign out
          SignOut() {
            return this.afAuth.signOut().then(() => {
              localStorage.removeItem('user');
              this.router.navigate(['homepage']);
            })
          }





   



  }
