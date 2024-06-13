import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SignupService } from '../signup/signup.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService implements CanActivate{

  constructor(private authService: SignupService, private router: Router) { }


  canActivate(): boolean {
 //   console.log('Checking admin role...');
    if (this.authService.isUserLoggedIn() && this.authService.isLoggedAdmin()) {
      console.log('Admin role found. Access granted.');
      return true;
    } else {
      console.log('No admin role or user not logged in. Access denied.');
      this.router.navigate(['/login']);
      return false;
    }
  }


}
