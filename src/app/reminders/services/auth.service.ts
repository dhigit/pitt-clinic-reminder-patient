import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from '../models/login';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  postLogin(data: Login): Observable<any>{
    return this.http.post<any>(
      `${this.url}/auth/login`, data, this.httpOptions
    ).pipe(
      map(
        result => {
          return result;
        }
      )
    )
  }
}
