import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CartModel } from '../../models/cart.model';

@Component({
  selector: 'swm-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  @Input() product!: CartModel;
  @Output() delete = new EventEmitter<number>();
  @Output() plus = new EventEmitter<number>();
  @Output() minus = new EventEmitter<number>();

  onDelete(id: number) {
    this.delete.emit(id);
  }

  onPlus(id: number) {
    this.plus.emit(id);
  }

  onMinus(id: number) {
    this.minus.emit(id);
  }
}
