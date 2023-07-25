import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { Product, products } from '../products';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  constructor(private route: ActivatedRoute, private cartService: CartService) {}
  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.product = products.find((product) => product.id == id);
    });
  }

  addToCart(product: Product){
    this.cartService.addToCart(product);
    alert(`${product.name} added successfully!!!`)
  }
}
