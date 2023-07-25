import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit{
  items!: Product[];
  prices: any;
  constructor(private cartService: CartService){}

  ngOnInit(){
    this.items = this.cartService.getItems();
    this.cartService.getPrices().subscribe((res)=>{
      this.prices = res;
    })
  }
}
