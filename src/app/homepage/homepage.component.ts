import { Component, OnInit, Output } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { AuthServiceService } from '../services/auth-service.service';
import { EventEmitter } from '@angular/core';
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
  constructor(public dialog: MatDialog,  public authservice: AuthServiceService) { }
 

  // email: string; password: string;
  
  // signUp( email: string, password: string) {
  // this.authServiceService.SignUp(this.email, this.password);
  // this.email = '';
  // this.password = '';
  // }
  
  // signIn( email: string, password: string) {
  // this.authServiceService.SignIn(this.email, this.password);
  // this.email = '';
  // this.password = '';
  // }
  
  // signOut() {
  // this.authServiceService.SignOut();
  // }
 
  // tryRegister(value: { email: string; password: string; }){
  //   this.authServiceService.doRegister(value)
  //   .then(res => {
  //     console.log(res);
  //     this.errorMessage = "";
  //     this.successMessage = "Your account has been created";
  //   }, err => {
  //     console.log(err);
  //     this.errorMessage = err.message;
  //     this.successMessage = "";
  //   })
  // }
 

  

 
 
  openDialog() {
    this.dialog.open(LoginComponent);
  }



  ngOnInit(): void {
  }


  logout(){
    // this.authservice.logout()
    this.isLogout.emit()
  }
}
