import { HttpClient } from '@angular/common/http';
import { DoCheck, Injectable, OnInit } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}

  items: Product[] = [];

  getPrices(){
    return this.http.get('/assets/shipping.json')
  }

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }
  clearCart() {
    this.items = [];
  }
}
