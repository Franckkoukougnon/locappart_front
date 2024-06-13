import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environnement/environment';
import { Whistlist } from 'src/app/model/whistlist.model';

@Injectable({
  providedIn: 'root'
})
export class WhistlistService {
  private baseUrl = environment.baseUrl +'/whistlists';

  constructor(private http :HttpClient) { }

  getAllWhistlists() : Observable<Whistlist[]> {
    return this.http.get<Whistlist[]>(`${this.baseUrl}`);
  }

  getWhistlistById(id: number): Observable<Whistlist> {
    return this.http.get<Whistlist>(`${this.baseUrl}/${id}`);
  }

  createWhistlist(whistlist: Whistlist): Observable<Whistlist> {
    return this.http.post<Whistlist>(`${this.baseUrl}`, whistlist);
  }

  updateWhistlist(id: number, whistlist: Whistlist): Observable<Whistlist> {
    return this.http.put<Whistlist>(`${this.baseUrl}/${id}`, whistlist);
  }

  deleteWhistlist(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  getWhistlistByAppartementId(id: number): Observable<Whistlist> {
    return this.http.get<Whistlist>(`${this.baseUrl}/appartement/${id}`);
  }

  addAppartementToWhistlist(whistlistId: number, appartementId: number): Observable<Whistlist> {
    return this.http.post<Whistlist>(`${this.baseUrl}/${whistlistId}/appartements/${appartementId}`, null);
  }

  removeAppartementFromWhistlist(whistlistId: number, appartementId: number): Observable<Whistlist> {
    return this.http.delete<Whistlist>(`${this.baseUrl}/${whistlistId}/appartements/${appartementId}`);
  }
}
