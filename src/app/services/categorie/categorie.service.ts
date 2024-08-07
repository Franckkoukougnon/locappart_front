import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environnement/environment';
import { Categorie } from 'src/app/model/categorie.model';

@Injectable({
  providedIn: 'root',
})
export class CategorieService {
  private baseUrl = environment.baseUrl + '/categories';

  constructor(private http: HttpClient) {}

  getCategorie(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(`${this.baseUrl}`);
  }

  getCategorieById(id: number): Observable<Categorie> {
    return this.http.get<Categorie>(`${this.baseUrl}/${id}`);
  }

  createCategorie(categorie: Categorie): Observable<Categorie> {
    return this.http.post<Categorie>(`${this.baseUrl}`, categorie);
  }

  updateCategorie(categorie: Categorie): Observable<Categorie> {
    return this.http.put<Categorie>(
      `${this.baseUrl}/${categorie.id}`,
      categorie
    );
  }

  deleteCategorie(id: number): Observable<Categorie> {
    return this.http.delete<Categorie>(`${this.baseUrl}/${id}`);
  }
}
