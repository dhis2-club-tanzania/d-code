import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthServiceService } from "../services/auth-service.service";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {
  
  constructor(
    public authservice: AuthServiceService,
    public router: Router,
    private afAuth: AngularFireAuth
  ){ }

  // canActivate(
  //   _next: ActivatedRouteSnapshot,
  //   _state: RouterStateSnapshot): Observable<boolean> | Promise<boolean | UrlTree> | boolean {
  //   if(this.authservice.isLoggedIn !== true) {
  //     this.router.navigate(['homepage'])
  //   }
  //   return true;
  // }

  async canActivate(
    // _route: ActivatedRouteSnapshot,
    // _state: RouterStateSnapshot): Promise<boolean | UrlTree> {
   _next: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot):  Promise<boolean | UrlTree> {
      const user = await this.afAuth.currentUser;
      // if(this.authservice.isLoggedIn !== true) {
        const isAuthenticated = user ? true : false;
            if (!isAuthenticated) {
            // alert('You must be authenticated in order to access this page');
            this.router.navigate(['homepage'])
          }
          return true;
  

  }



}
