import { ProductModel } from 'src/app/products/models/product.model';

export interface CartModel extends ProductModel {
  productCount: number;
}
