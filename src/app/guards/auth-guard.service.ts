import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthServiceService } from "../services/auth-service.service";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {
  
  constructor(
    public authservice: AuthServiceService,
    public router: Router
  ){ }

  canActivate(
    _next: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.authservice.isLoggedIn !== true) {
      this.router.navigate(['homepage'])
    }
    return true;
  }

}
