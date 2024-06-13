import {Injectable} from '@angular/core';
import {environment} from "../../environnement/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FavorisService {

  private baseUrl = environment.baseUrl + '/favoris';

  constructor(private http: HttpClient) {
  }

  addFavoris(userId: number, appartementId: number): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/${userId}/${appartementId}`, null);
  }

  deleteFavoris(userId: number, appartementId: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${userId}/${appartementId}`);
  }

  getFavoris(userId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${userId}`);
  }


}
