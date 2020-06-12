import  { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../models/User';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = 'http://localhost:8080/api/auth/user';

  constructor(private http: HttpClient) { }

  getListUser(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }

  getUser(id: string): Observable<any> {
    return this.http.get(`${this.userUrl}/${id}`);
  }

  deleteUserById(id: string): Observable<void> {
    return this.http.delete<void>(`${this.userUrl}/${id}`);
  }
}
