import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SizeService {
  private baseUrl = 'http://localhost:8080/api/auth/size';
  constructor(private http: HttpClient) { }
  getSize(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  getSizeList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  // tslint:disable-next-line:ban-types
  createSize(size: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, size);
  }
  deleteSize(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }
  updateSize(id: number, value: any): Observable<object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
}
