import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environnement/environment';
import { Categorie } from 'src/app/model/categorie.model';

@Injectable({
  providedIn: 'root',
})
export class TypeAppartService {
  private baseUrl = environment.baseUrl + '/categories';

  constructor(private http: HttpClient) {}

  getTypeAppart(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(`${this.baseUrl}`);
  }

  getTypeAppartById(id: number): Observable<Categorie> {
    return this.http.get<Categorie>(`${this.baseUrl}/${id}`);
  }

  createTypeAppart(typeAppart: Categorie): Observable<Categorie> {
    return this.http.post<Categorie>(`${this.baseUrl}`, typeAppart);
  }

  updateTypeAppart(typeAppart: Categorie): Observable<Categorie> {
    return this.http.put<Categorie>(
      `${this.baseUrl}/${typeAppart.id}`,
      typeAppart
    );
  }

  deleteTypeAppart(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
