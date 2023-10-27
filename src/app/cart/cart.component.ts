
import { Component, OnInit } from '@angular/core';
import { iproducts } from '../iproducts';
import { CartService } from 'src/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: iproducts[] = [];
  total: number = 0;
  name: string = '';
  address: string = '';
  serviceFee: number = 0;
  discountApplied: boolean = false;

  constructor(private CS: CartService) { }

  incrementQuantity(product: iproducts) {
    this.CS.incrementQuantity(product);
  }

  decrementQuantity(product: iproducts) {
    this.CS.decrementQuantity(product);
  }

  ngOnInit(): void {
    this.cart = this.CS.getCart();


    this.calculateTotal();

    this.CS.totalUpdated.subscribe((newTotal: number) => {
      this.total = newTotal;
      this.calculateServiceFeeAndDiscount();
    });
  }

  calculateTotal() {
    this.total = this.cart.reduce((sum, product) => sum + (product.price * product.quantity), 0);
  }

  calculateServiceFeeAndDiscount() {
    this.serviceFee = this.total * 0.1;

    if (this.total > 40 && !this.discountApplied) {

      this.total = this.total * 0.85;
      this.discountApplied = true;
    }
  }

  submitOrder() {
    console.log('Order submitted:');
    console.log('Name: ' + this.name);
    console.log('Address: ' + this.address);
  }
}