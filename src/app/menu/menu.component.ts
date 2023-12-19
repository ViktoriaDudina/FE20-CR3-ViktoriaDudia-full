import { Component, OnInit } from '@angular/core';
import { iproducts } from '../iproducts';
import { ActivatedRoute, Params } from '@angular/router';
import { products } from '../products';
import { CartService } from 'src/cart.service';
import Swal from 'sweetalert2'; // Импорт SweetAlert

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
