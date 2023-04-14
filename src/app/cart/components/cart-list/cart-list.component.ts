import { Component } from '@angular/core';
import { CartControllerService } from '../../services/cart.controller.service';
import { CartModel } from '../../models/cart.model';

@Component({
  selector: 'swm-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent {
  products$ = this.controller.cartProducts$;

  constructor(private controller: CartControllerService) {}

  trackById(index: number, product: CartModel) {
    return product.id;
  }
}
