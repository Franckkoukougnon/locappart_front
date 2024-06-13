import { Injectable } from '@angular/core';
import { SignupService } from '../signup/signup.service';
import { ActivatedRouteSnapshot, CanActivate, PreloadingStrategy, Route, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: SignupService, private router: Router) { }



  canActivate(): boolean {
    const isLoggedIn = this.authService.isUserLoggedIn();

    if (isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }



  private checkLoggedIn(): boolean {
    const isLoggedIn = this.authService.isUserLoggedIn();
   console.log('Is User Logged In:', isLoggedIn);
    return isLoggedIn;
  }

  private checkUserRole(role: string): boolean {
    return this.authService.getUserRoles().includes(role);
  }
}
