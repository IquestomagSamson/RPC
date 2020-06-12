import { Injectable } from '@angular/core';
import {ProductDetail} from '../models/productDetail';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {

  private readonly API_URL = 'http://localhost:8080/api/auth/productDetail';

  constructor(private http: HttpClient) { }
  getProductDetail(): Observable<ProductDetail[]> {
    return this.http.get<ProductDetail[]>(`${this.API_URL}`);
  }
  getProductDetailById(id: number): Observable<ProductDetail> {
    return this.http.get<ProductDetail>(`${this.API_URL}/${id}`);
  }
  // createProductDetail(productDetail: ProductDetail): Observable<ProductDetail> {
  //   return this.http.post<ProductDetail>(this.API_URL, productDetail);
  // }
  createProductDetail(productDetail): Observable<any> {
    console.log(productDetail);
    return this.http.post(this.API_URL, productDetail);
  }
  updateProductDetail(productDetail): Observable<any> {
    console.log(productDetail);
    return this.http.put(this.API_URL + '/' + productDetail.id, productDetail);
  }
  deleteProductDetail(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }
  findByOrderId(idOrder): Observable<any> {
    return this.http.get(this.API_URL + '/cart/' + idOrder);
  }

  findByProduct_IdAndOrder_Id(idProduct, idOrder): Observable<any> {
    return this.http.get(this.API_URL + '/cart/' + idProduct + '/' + idOrder);
  }
}
