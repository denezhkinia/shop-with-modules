import { Component, Input } from '@angular/core';
import { CartModel } from '../../models/cart.model';
import { CartControllerService } from '../../services/cart.controller.service';

@Component({
  selector: 'swm-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  @Input() product!: CartModel;

  constructor(private controller: CartControllerService) {}

  onDelete(id: number) {
    this.controller.deleteProduct(id);
  }

  onPlus(id: number) {
    this.controller.plusCount(id);
  }

  onMinus(id: number) {
    this.controller.minusCount(id);
  }
}
