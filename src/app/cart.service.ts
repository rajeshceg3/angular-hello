import { Injectable } from '@angular/core';
import { Product} from './products'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  bag : Product[] = [];
  constructor() { }

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
}
