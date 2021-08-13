import { Injectable, NgZone  } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
// import { Observable } from 'rxjs';
// import  auth  from 'firebase/app';


import { User } from '../shared/services/user';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import  firebase from 'firebase/app';



@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  // userData: Observable<firebase.User>;

  isLoggedIn = false //*ngIf="!isSignedIn"
  doRegister: any;
  userData: any; // Save logged in user data

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
          JSON.parse(localStorage.getItem('user')   || '{}'
          );
        } else {
          localStorage.setItem('user',"email");
          JSON.parse(localStorage.getItem('user')  || '{}');
        }
      }  )

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
      this.router.navigate(['user-component']);
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
  async SignOut() {
  await this.afAuth.signOut().then(() => {

  localStorage.removeItem('user');
  this.router.navigate(['login']);
})

}




// async signin(email: string, password: string){
//   await this.afAuth.signInWithEmailAndPassword(email, password)
//   .then(_res => {
//     this.isLoggedIn = true
//     localStorage.setItem('user', JSON.stringify(_res.user))
//   })
// }

// async signup(email: string, password: string){
//   await this.afAuth.createUserWithEmailAndPassword(email, password)
//   .then(_res => {
//     this.isLoggedIn = true
//     localStorage.setItem('user', JSON.stringify(_res.user))
//   })
// }

// logout(){
//   this.afAuth.signOut();
//   localStorage.removeItem('user')
// }


  doFacebookLogin(){
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.FacebookAuthProvider();
      this.afAuth
      .signInWithPopup(provider)
      .then(res => {
        resolve(res);
      }, err => {
        console.log(err);
        reject(err);
      })
    })
 }

  // doGoogleLogin(){
  //   return new Promise<any>((resolve, _reject) => {
  //     let provider = new firebase.auth.GoogleAuthProvider();
  //     provider.addScope('profile');
  //     provider.addScope('email');
  //     this.afAuth
  //     .signInWithPopup(provider)
  //     .then(res => {
  //       resolve(res);
  //     })
  //   })
  //   }



    }
