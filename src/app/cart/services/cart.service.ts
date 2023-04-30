import { Injectable } from '@angular/core';
import { ProductModel } from 'src/app/products/models/product.model';
import { CartModel } from '../models/cart.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartProducts$$ = new BehaviorSubject<CartModel[]>([]);
  cartProducts$ = this.cartProducts$$.asObservable();

  addNewProduct(product: ProductModel) {
    if (this.isProductInCart(product.id)) {
      this.addProductCount(product.id);
    } else {
      const newProducts = [
        ...this.cartProducts$$.value,
        {
          ...product,
          productCount: 1,
        },
      ];
      console.log(newProducts);

      this.cartProducts$$.next(newProducts);
    }
  }

  deleteProduct(id: number) {
    const newProducts = this.cartProducts$$.value.filter(
      (item: CartModel) => item.id !== id
    );
    console.log(newProducts);

    this.cartProducts$$.next(newProducts);
  }

  plusCount(id: number) {
    this.addProductCount(id);
  }

  minusCount(id: number) {
    const productCount = this.cartProducts$$.value.find(
      (item: CartModel) => item.id === id
    )?.productCount;
    if (productCount === 1) {
      this.deleteProduct(id);
    } else {
      this.removeProductCount(id);
    }
  }

  private isProductInCart(productId: number) {
    return !!this.cartProducts$$.value.find(
      (item: CartModel) => item.id === productId
    );
  }

  private addProductCount(productId: number) {
    const newProducts = this.cartProducts$$.value.map((item: CartModel) =>
      item.id === productId
        ? { ...item, productCount: ++item.productCount }
        : item
    );

    this.cartProducts$$.next(newProducts);
  }

  private removeProductCount(productId: number) {
    const newProducts = this.cartProducts$$.value.map((item: CartModel) =>
      item.id === productId
        ? { ...item, productCount: --item.productCount }
        : item
    );

    this.cartProducts$$.next(newProducts);
  }
}
