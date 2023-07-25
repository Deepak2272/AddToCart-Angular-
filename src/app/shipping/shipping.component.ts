import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
})
export class ShippingComponent implements OnInit {
  prices: any;
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getPrices().subscribe((res) => {
      this.prices = res;
    });
  }
}
