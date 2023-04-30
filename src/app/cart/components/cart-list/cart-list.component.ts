import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartModel } from '../../models/cart.model';
import { Subscription, tap } from 'rxjs';

@Component({
  selector: 'swm-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartListComponent implements OnInit, OnDestroy {
  products!: CartModel[];
  totalCost!: number;
  totalQuantity!: number;

  subscription!: Subscription;

  constructor(
    private cartService: CartService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.subscription = this.cartService.cartProducts$
      .pipe(
        tap((products: CartModel[]) => {
          this.products = products;
          this.totalCost = this.cartService.totalCost;
          this.totalQuantity = this.cartService.totalQuantity;
          this.cdr.detectChanges();
        })
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  trackById(index: number, product: CartModel) {
    return product.id;
  }

  deleteProduct(id: number) {
    this.cartService.deleteProduct(id);
  }

  quantityIncrease(id: number) {
    this.cartService.quantityIncrease(id);
  }

  quantityDecrease(id: number) {
    this.cartService.quantityDecrease(id);
  }
}
