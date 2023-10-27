
import { Injectable, EventEmitter, Output } from '@angular/core';
import { iproducts } from './app/iproducts';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Array<iproducts> = [];
  total: number = 0;

  @Output() totalUpdated: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  addToCart(product: iproducts) {
    const existingProduct = this.cart.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      product.quantity = 1;
      this.cart.push(product);
    }

    this.updateTotal();
  }

  getCart() {
    return this.cart;
  }

  calcTotal() {
    let total: number = 0;

    this.cart.forEach((val) => {
      total += val.price * val.quantity;
    });
    return total;
  }

  incrementQuantity(product: iproducts) {
    product.quantity++;
    this.updateTotal();
  }

  decrementQuantity(product: iproducts) {
    if (product.quantity > 1) {
      product.quantity--;
    }
    this.updateTotal();
  }

  private updateTotal() {
    this.total = this.calcTotal();
    this.totalUpdated.emit(this.total);
  }
}
