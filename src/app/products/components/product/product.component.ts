import { Component, Input } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { CartControllerService } from 'src/app/cart/services/cart.controller.service';

@Component({
  selector: 'swm-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product!: ProductModel;

  constructor(private cartController: CartControllerService) {}

  onBuy() {
    this.cartController.addNewProduct(this.product);
  }
}
