import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  private baseUrl = 'http://localhost:8080/api/auth/color';
  constructor(private http: HttpClient) { }
  getColor(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  getColorList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  // tslint:disable-next-line:ban-types
  createColor(color: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, color);
  }
  deleteColor(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }
  updateColor(id: number, value: any): Observable<object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
}
