import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {LocalStorageService} from 'angular-web-storage';

import {jwtDecode} from 'jwt-decode';
import {BehaviorSubject, catchError, Observable, tap, throwError} from 'rxjs';
import {environment} from 'src/app/environnement/environment';
import {JwtPayload} from 'src/app/model/JwtPayload.model';
import {Login} from 'src/app/model/login.model';
import {Signup} from 'src/app/model/signup.model';

@Injectable({
  providedIn: 'root'
})
//Service qui gere la connexion et la deconnexion de l'utilisateur
export class SignupService {

  errorMessage!: string;
  private baseUrl = environment.baseUrl;
  private loggedInUsername: string | null = null;
  private userRoles: string[] = [];
  private userId: string | null = null;

  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageService,
  ) {
  }


  // Inscription de l'utilisateur
  registerUser(userData: any): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/users/register`, userData, {responseType: 'text' as 'json'})
      .pipe(
        catchError(this.handleError)
      );
  }

  // Gestion des erreurs
  private handleError(error: HttpErrorResponse): Observable<string> {
    if (error.error instanceof ErrorEvent) {
      // Erreur côté client
      console.error('An error occurred:', error.error.message);
    } else {
      // Le backend a renvoyé une réponse avec un code d'erreur.
      // Récupérer le message d'erreur du corps de la réponse.
      return throwError(error.error);
    }
    // Renvoyer une chaîne vide si l'erreur est côté client.
    return throwError('Something bad happened; please try again later.');
  }


  // Connexion de l'utilisateur
  loginUser(userData: Login): Observable<Login> {
    return this.http.post<Login>(`${this.baseUrl}/login`, userData).pipe(
      tap((response: any) => {


        // Vérifiez si la réponse contient un token
        if (response.token) {
          // Stockez le token dans le stockage local
          this.localStorage.set('token', response.token);
          // Stocker le nom d'utilisateur dans une variable de service
          this.loggedInUsername = userData.username;
          //this.userId = response.userId;
          this.userId = response.userId; // Stocker le nom d'utilisateur dans une variable de service


        //  console.log('User Roles:', response.roles);
        //  console.log('Token:', response.token);
        //  console.log('User Id:', response.token.userId);
        //  console.log('User Name:', response.username);

        }
      })
    );
  }

  // Récupérer l'ID de l'utilisateur connecté
  getUserId(): number | undefined {
    const token = this.localStorage.get('token');
    if (typeof token !== 'string') {
      console.error('Token is not a string:', token);
      return undefined;
    }
    try {
      const decodedToken = jwtDecode<JwtPayload>(token);
      const userId = decodedToken?.userId;
      return userId;
    } catch (error) {
      console.error('Error decoding token:', error);
      return undefined;
    }


  }

  getLoggedInUsername(): string | null {
    return this.localStorage.get('token') ? this.loggedInUsername : null;
  }

  logoutUser(): void {
    // Suppression du token du stockage local lors de la déconnexion
    this.localStorage.remove('token');
    this.loggedInUsername = null;
  }

  // déterminer si l'utilisateur est connecté
  isUserLoggedIn(): boolean {
    // Logique pour vérifier si l'utilisateur est connecté
    // Par exemple, vérifier si le token est présent dans le local storage
    return !!this.localStorage.get('token'); // Vous devrez peut-être ajuster selon votre implémentation réelle
  }

  getToken() {
    return !!this.localStorage.get('token');
  }

  getUserRoles(): string[] {
    const token = this.localStorage.get('token');

    if (typeof token !== 'string') {
      console.error('Token is not a string:', token);
      return [];
    }

    try {
      const decodedToken = jwtDecode<JwtPayload>(token);
      const roles = decodedToken?.roles || [];
      const userId = decodedToken?.userId;
      const userName = decodedToken?.sub;
      //console.log('User Nom:', userName);
     // console.log('User Roles:', roles);
    //  console.log('User Id:', userId);
      return roles;
    } catch (error) {
      console.error('Error decoding token:', error);
      return [];
    }
  }


  isLoggedAdmin(): boolean {
    // Logique pour vérifier si l'utilisateur a le rôle d'administrateur
    const userRoles = this.getUserRoles();
    // Logique pour vérifier si l'utilisateur a le username d'administrateur
    const userName = this.getLoggedInUsername();

    console.log('User Roles:', userRoles);
    console.log('User Name:', userName);
    return this.isUserLoggedIn() && userRoles.includes('ROLE_ADMIN');
  }
}
