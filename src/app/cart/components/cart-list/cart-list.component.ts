import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartModel } from '../../models/cart.model';

@Component({
  selector: 'swm-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent {
  products$ = this.cartService.cartProducts$;

  constructor(private cartService: CartService) {}

  trackById(index: number, product: CartModel) {
    return product.id;
  }

  onDelete(id: number) {
    this.cartService.deleteProduct(id);
  }

  onPlus(id: number) {
    this.cartService.plusCount(id);
  }

  onMinus(id: number) {
    this.cartService.minusCount(id);
  }
}
