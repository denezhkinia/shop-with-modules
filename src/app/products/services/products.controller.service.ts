import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { ProductsMock } from '../mocks/product.mock';

@Injectable({
  providedIn: 'root',
})
export class ProductsControllerService {
  getProducts(): Array<ProductModel> {
    return JSON.parse(JSON.stringify(ProductsMock));
  }
}
