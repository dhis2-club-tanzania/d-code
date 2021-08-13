import { Component, OnInit } from '@angular/core';
import { SocialAuthService, FacebookLoginProvider, GoogleLoginProvider,  SocialUser } from 'angularx-social-login';


//email validator
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { AuthServiceService } from '../services/auth-service.service';
// import { FirebaseApp } from '@angular/fire';





// //password validator
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, _form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control?.invalid && control?.parent?.dirty);
    const invalidParent = !!(control?.parent?.invalid && control?.parent?.dirty);

    return (invalidCtrl || invalidParent);
  }
}




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // isLoggedin: boolean = false;
  isSignedIn= false
  loginForm: FormGroup ;
  socialUser: SocialUser = new SocialUser;

ngOnInit(){
  //button-toggle
      this.selectedVal1 ='login';

      if(localStorage.getItem('user') != null)
      this.isSignedIn = true
      else
      this.isSignedIn = false

    } 
    
// async onSignup(email: string,password:string){
//   await this.authservice.signup(email, password)
//   if(this.authservice.isLoggedIn)
//   this.isSignedIn = true
// }

// async onSignin(email: string,password:string){
//   await this.authservice.signin(email, password)
//   if(this.authservice.isLoggedIn)
//   this.isSignedIn = true
// }

handleLogout(){
  this.isSignedIn = false
}



    public onVal1Change(val1: string) {
      this.selectedVal1 = val1
  
    }

 

//hide-show-password
  hide = true;
  c_hide = true;

//button-toggle
  public selectedVal1: string | undefined;


//div-content-button-toggle
  login:boolean=true;
  register:boolean=false;
  // bar:boolean=true;


  loginFunction(){
    // this.bar=true;
    this.login=true;
    this.register=false
}

registerFunction(){
  // this.bar=false;
  this.login=false;
  this.register=true
}




//email validator
email = new FormControl('', [Validators.required, Validators.email]);

getErrorMessage() {
  if (this.email.hasError('required')) {
    return 'You must enter a value';
  }

  return this.email.hasError('email') ? 'Not a valid email' : '';
}

//password validator
myForm: FormGroup;

matcher = new MyErrorStateMatcher();

  constructor(private formBuilder: FormBuilder , public authservice: AuthServiceService, 
    private socialAuthService: SocialAuthService) {
    this.myForm = this.formBuilder.group({
      password: ['', [Validators.required]],
      confirmPassword: ['']
    }, { validator: this.checkPasswords });

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });    
    
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isSignedIn = (user != null);
      console.log(this.socialUser);
    });

    console.log(this.isSignedIn)

  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.controls.password.value;
    let confirmPass = group.controls.confirmPassword.value;

    return pass === confirmPass ? null : { notSame: true }
  }


  // constructor() { }

  loginWithFacebook(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }



  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  logOut(): void {
    this.socialAuthService.signOut();
  }
  

}
