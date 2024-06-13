import { Injectable } from '@angular/core';
import {environment} from "../../environnement/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ville} from "../../model/ville.model";

@Injectable({
  providedIn: 'root'
})
export class VilleService {

  private baseUrl = environment.baseUrl + '/ville';

  constructor(private http: HttpClient) { }

  getVille(): Observable<Ville[]> {

    return this.http.get<Ville[]>(`${this.baseUrl}`);
  }

  getVilleById(id: number): Observable<Ville> {
    return this.http.get<Ville>(`${this.baseUrl}/${id}`);
  }

  createVille(ville: Ville): Observable<Ville> {
    return this.http.post<Ville>(`${this.baseUrl}`, ville);
  }

  updateVille(ville: Ville): Observable<Ville> {
    return this.http.put<Ville>(`${this.baseUrl}/${ville.id}`, ville);
  }

  deleteVille(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }


}
