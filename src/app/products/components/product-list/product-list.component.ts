import { Component, OnInit } from '@angular/core';
import { ProductsControllerService } from '../../services/products.controller.service';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'swm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products!: Array<ProductModel>;

  // можете оставить такие названия для себя, но, думаю, что общего словаря
  // между React и Angular не будет и лучше использовать те сущности, которые есть
  // в Angular
  constructor(private controller: ProductsControllerService) {}

  ngOnInit() {
    this.products = this.controller.getProducts();
  }
}
