import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product} from './products'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  bag : Product[] = [];
  constructor( private http:HttpClient) { }

  addToCart( product : Product){
    this.bag.push(product);
  }

  getItems(){
    return this.bag;
  }

  emptyCart(){
    this.bag = [];
    return this.bag;
  }

  getShippingPrices(){
    return this.http.get<{type: string, price: number}[]>('./assets/shipping.json');
  }
}
