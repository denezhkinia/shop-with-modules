import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { ProductsMock } from '../mocks/product.mock';

@Injectable({
  providedIn: 'root',
})
// В Angular не употребляют такого суффикса как Controller
// просто ProductsService
export class ProductsControllerService {
  getProducts(): Array<ProductModel> {
    return ProductsMock;  // почему так нельзя?
    // return JSON.parse(JSON.stringify(ProductsMock));
  }
}
