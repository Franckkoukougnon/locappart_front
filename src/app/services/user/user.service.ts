import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environnement/environment';
import { User } from 'src/app/model/user.model';
import { Whistlist } from 'src/app/model/whistlist.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = environment.baseUrl + '/user';

  constructor(private http: HttpClient) { }




}
