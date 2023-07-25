import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductAlertComponent } from './product-alert/product-alert.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ShoppingComponent } from './shopping/shopping.component';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
  },
  { path: 'product-alert', component: ProductAlertComponent },
  { path:'product/:id', component: ProductDetailsComponent},
  { path: 'cart', component: CartComponent},
  { path: 'shipping', component: ShoppingComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
