// import { Injectable } from '@angular/core';
// import {Observable, Observer} from 'rxjs';
// import {ShoppingCart} from '../models/shopping-cart';
// import {Product} from '../models/product';
// import {ProductDetail} from '../models/productDetail';
// import {Router} from '@angular/router';
// import {ProductDetailService} from './product-detail.service';
// import {CartItem} from '../models/cart-item';
// import {StorageService} from './storage.service';
// import {ProductService} from './product.service';
// const CART_KEY = 'cart';
// @Injectable({
//   providedIn: 'root'
// })
// export class ShoppingCartService {
//
//   private storage: Storage;
//   private subscriptionObservable: Observable<ShoppingCart>;
//   private subscribers: Array<Observer<ShoppingCart>> = new Array<Observer<ShoppingCart>>();
//   private products: Product[];
//   private productDetail: ProductDetail[];
//   public itemCount: number;
//
//   public constructor(private storageService: StorageService,
//                      private productService: ProductService,
//                      private productDetailService: ProductDetailService,
//                      private router: Router) {
//     this.storage = this.storageService.get();
//
//     this.productService.getListProduct().subscribe(
//       (products) => this.products = products);
//
//     this.productDetailService.getProductDetail().subscribe(
//       (options) => this.productDetail = options);
//
//     this.subscriptionObservable = new Observable<ShoppingCart>((observer: Observer<ShoppingCart>) => {
//       this.subscribers.push(observer);
//       observer.next(this.retrieve());
//       return () => {
//         this.subscribers = this.subscribers.filter((obs) => obs !== observer);
//       };
//     });
//   }
//
//   public get(): Observable<ShoppingCart> {
//     return this.subscriptionObservable;
//   }
//
//   public addItem(product: Product, quantity: number): void {
//     const cart = this.retrieve();
//     let item = cart.items.find((p) => p.productId === product.id);
//     if (item === undefined) {
//       item = new CartItem();
//       item.productId = product.id;
//       cart.items.push(item);
//     }
//
//     item.quantity += quantity;
//     cart.items = cart.items.filter((cartItem) => cartItem.quantity > 0);
//     if (cart.items.length === 0) {
//       cart.id = undefined;
//     }
//
//     this.calculateCart(cart);
//     this.save(cart);
//     this.dispatch(cart);
//   }
//
//   public empty(): void {
//     const newCart = new ShoppingCart();
//     this.save(newCart);
//     this.dispatch(newCart);
//   }
//
//   public setOrderDetail(productDetail: ProductDetail): void {
//     const cart = this.retrieve();
//     cart.id = productDetail.id;
//     this.calculateCart(cart);
//     this.save(cart);
//     this.dispatch(cart);
//   }
//
//   private calculateCart(cart: ShoppingCart): void {
//     cart.itemsTotal = cart.items
//       .map((item) => item.quantity * this.products.find((p) => p.id === item.productId).price)
//       .reduce((previous, current) => previous + current, 0);
//     cart.deliveryTotal = cart.id ?
//       this.productDetail.find((x) => x.id === cart.id).salePrice :
//       0;
//     cart.grossTotal = cart.itemsTotal + cart.deliveryTotal;
//   }
//
//   private retrieve(): ShoppingCart {
//     const cart = new ShoppingCart();
//     const storedCart = this.storage.getItem(CART_KEY);
//     if (storedCart) {
//       cart.updateForm(JSON.parse(storedCart));
//     }
//
//     return cart;
//   }
//
//   private save(cart: ShoppingCart): void {
//     this.storage.setItem(CART_KEY, JSON.stringify(cart));
//   }
//
//   private dispatch(cart: ShoppingCart): void {
//     this.subscribers
//       .forEach((sub) => {
//         try {
//           sub.next(cart);
//         } catch (e) {
//         }
//       });
//   }
// }
