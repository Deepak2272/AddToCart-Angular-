import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService } from '../cart.service';
import { Product } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit{
  items!: Product[];
  checkoutForm!: FormGroup;
  constructor(private cartService: CartService){
    this.checkoutForm = new FormGroup({
      name: new FormControl(''),
      address: new FormControl('')
    })
  }

  ngOnInit(){
    this.items = this.cartService.getItems();
  }

  onSubmit(){
    console.log(this.checkoutForm.value)
  }
}
