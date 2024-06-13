import { Injectable } from '@angular/core';
import {environment} from "../../environnement/environment";
import {HttpClient} from "@angular/common/http";
import {Appartement} from "../../model/appartement.model";
import {Observable} from "rxjs";
import {Bailleur} from "../../model/bailleur.model";

@Injectable({
  providedIn: 'root'
})
export class BailleurService {


  private baseUrl = environment.baseUrl +'/bailleur';

  constructor(private http :HttpClient) { }

  getAllBailleur(): Observable<Bailleur[]> {
    return this.http.get<Bailleur[]>(`${this.baseUrl}`);

  }
  createBailleur(bailleur: Bailleur): Observable<Bailleur> {
    return this.http.post<Bailleur>(`${this.baseUrl}`, bailleur);
  }

  getBailleurById(id: number): Observable<Bailleur> {
    return this.http.get<Bailleur>(`${this.baseUrl}/${id}`);
  }

  updateBailleur(id: number, bailleur: Bailleur): Observable<Bailleur> {
    return this.http.put<Bailleur>(`${this.baseUrl}/${id}`, bailleur);
  }

  deleteBailleur(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }




}
