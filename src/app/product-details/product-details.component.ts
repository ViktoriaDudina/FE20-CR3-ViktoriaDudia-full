import { Component, OnInit } from '@angular/core';
import { iproducts } from '../iproducts';
import { ActivatedRoute, Params } from '@angular/router';
import { products } from '../products';
import { CartService } from 'src/cart.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: iproducts = {} as iproducts;
  id: number = 0;

  constructor(private route: ActivatedRoute, private CS: CartService) { }

  addToCart(product: iproducts) {
    Swal.fire({ // Использование SweetAlert
      title: "Success!",
      text: product.name + " has been added to the cart",
      imageUrl: product.image,
      imageWidth: 250,
      imageHeight: 250,
      imageAlt: "Custom image"
    });
    this.CS.addToCart(product);
  }


  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.id = +param["id"];
      this.product = products[this.id];
    })

  }
}
