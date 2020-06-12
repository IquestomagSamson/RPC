import { Injectable } from '@angular/core';

const ID_CART = 'idCart';
@Injectable({
  providedIn: 'root'
})
export class StorageService {
  // public get(): Storage {
  //   return localStorage;
  // }
  public remove() {
    localStorage.clear();
  }

  public saveCart(idCart) {
    localStorage.setItem(ID_CART, JSON.stringify(idCart));
  }

  public getCart() {
    return JSON.parse(localStorage.getItem(ID_CART));
  }
}
