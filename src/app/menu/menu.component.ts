import { Component, OnInit } from '@angular/core';
import { iproducts } from '../iproducts';
import { ActivatedRoute, Params } from '@angular/router';
import { products } from '../products';
import { CartService } from 'src/cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  productsArr: iproducts[] = products;


  product: iproducts = {} as iproducts;
  id: number = 0;

  constructor(private route: ActivatedRoute, private CS: CartService) { }

  addToCart() {
    alert("Your taste journey has been added to your cart");
    this.CS.addToCart(this.product)

  }


  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.id = +param["id"];
      this.product = products[this.id];
    })

  }
}
