import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/app/environnement/environment';
import {Appartement} from 'src/app/model/appartement.model';


@Injectable({
  providedIn: 'root'
})
export class AppartementService {

  private baseUrl = environment.baseUrl + '/appart';

  constructor(private http: HttpClient) {
  }

  getAllAppartements(): Observable<Appartement[]> {
    return this.http.get<Appartement[]>(`${this.baseUrl}`);

  }

  getAppartementById(id: number): Observable<Appartement> {
    return this.http.get<Appartement>(`${this.baseUrl}/${id}`);
  }

  createAppartement(appartement: Appartement): Observable<Appartement> {
    return this.http.post<Appartement>(`${this.baseUrl}`, appartement);
  }

  updateAppartement(id: number, appartement: Appartement): Observable<Appartement> {
    return this.http.put<Appartement>(`${this.baseUrl}/${id}`, appartement);
  }

  deleteAppartement(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  getAppartementsByVillesAndCategories( selectedCategoryIds: number[]): Observable<Appartement[]> {
    // Construire les paramètres de la requête
    let params = new HttpParams();

    selectedCategoryIds.forEach(categoryId => {
      params = params.append('categories', categoryId.toString());
    });

    // Faire la requête HTTP avec les paramètres
    return this.http.get<Appartement[]>('http://localhost:8082/api/appart/appartements', { params });
  }
}
