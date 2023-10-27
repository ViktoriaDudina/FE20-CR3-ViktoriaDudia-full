import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path: "", component: HomeComponent
}, {
  path: "menu", component: MenuComponent
}, {
  path: "product/:id", component: ProductDetailsComponent
}, {
  path: "cart", component: CartComponent
}, {
  path: "about-us", component: AboutusComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
