import {
  Component,
  Input,
  EventEmitter,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CartModel } from '../../models/cart.model';

@Component({
  selector: 'swm-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {
  @Input() product!: CartModel;
  @Output() delete = new EventEmitter<number>();
  @Output() quantityIncrease = new EventEmitter<number>();
  @Output() quantityDecrease = new EventEmitter<number>();

  onDelete(id: number) {
    this.delete.emit(id);
  }

  onQuantityIncrease(id: number) {
    this.quantityIncrease.emit(id);
  }

  onQuantityDecrease(id: number) {
    this.quantityDecrease.emit(id);
  }
}
