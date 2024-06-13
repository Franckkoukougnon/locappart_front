import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environnement/environment';
import { Categorie } from 'src/app/model/categorie.model';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private baseUrl = environment.baseUrl + '/categorie';

  constructor(private http :HttpClient) { }

  getCategorie(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(`${this.baseUrl}`);
  }


  

  getCategorieById(id: number): Observable<Categorie> {
    return this.http.get<Categorie>(`${this.baseUrl}/${id}`);
  }
}
