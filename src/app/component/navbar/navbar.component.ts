import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/services/signup/signup.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

  loggedInUsername: string | null = null;






  constructor(
    private loginservice: SignupService,
     private router : Router,
     ) { }

     ngOnInit() {
      this.loggedInUsername = this.loginservice.getLoggedInUsername();
    }


  isLoggedIn() {
    return this.loginservice.getToken();
  }

  isLoggedAdmin() {
    return this.loginservice.getUserRoles().includes('ROLE_ADMIN');
  }

  isLoggedUser() {
    return this.loginservice.getUserRoles().includes('ROLE_USER');
  }
  isLoggedName() {
    return this.loginservice.getLoggedInUsername();
  }

  logout() {
    // ... votre logique de connexion

    // Mettez à jour la variable après une connexion réussie
    this.loginservice.logoutUser();
    this.router.navigate(['/login']);
  }
}