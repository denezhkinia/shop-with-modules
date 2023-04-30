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

  get totalCost(): number {
    return this.cartProducts$$.value.reduce(
      (totalCost: number, product: CartModel) => {
        totalCost += product.price * product.totalQuantity;
        return totalCost;
      },
      0
    );
  }

  get totalQuantity(): number {
    return this.cartProducts$$
      .getValue()
      .reduce((totalQuantity: number, product: CartModel) => {
        totalQuantity += product.totalQuantity;
        return totalQuantity;
      }, 0);
  }

  addNewProduct(product: ProductModel) {
    const newProducts = this.isProductInCart(product.id)
      ? this.increaseTotalQuantity(product.id)
      : this.addNewProductToCard(product);

    this.cartProducts$$.next(newProducts);
  }

  deleteProduct(id: number) {
    const newProducts = this.cartProducts$$.value.filter(
      (item: CartModel) => item.id !== id
    );
    this.cartProducts$$.next(newProducts);
  }

  quantityIncrease(id: number) {
    this.cartProducts$$.next(this.increaseTotalQuantity(id));
  }

  quantityDecrease(id: number) {
    const totalQuantity = this.cartProducts$$.value.find(
      (item: CartModel) => item.id === id
    )?.totalQuantity;
    if (totalQuantity === 1) {
      this.deleteProduct(id);
    } else {
      this.cartProducts$$.next(this.decreaseTotalQuantity(id));
    }
  }

  private isProductInCart(productId: number) {
    return !!this.cartProducts$$.value.find(
      (item: CartModel) => item.id === productId
    );
  }

  private addNewProductToCard(product: ProductModel): CartModel[] {
    const totalQuantity = 1;
    return [
      ...this.cartProducts$$.value,
      {
        ...product,
        totalQuantity,
        totalCost: product.price,
      },
    ];
  }

  private increaseTotalQuantity(productId: number): CartModel[] {
    return this.cartProducts$$.value.map((item: CartModel) => {
      if (item.id === productId) {
        const totalQuantity = ++item.totalQuantity;
        return {
          ...item,
          totalQuantity,
          totalCost: totalQuantity * item.price,
        };
      }
      return item;
    });
  }

  private decreaseTotalQuantity(productId: number): CartModel[] {
    return this.cartProducts$$.value.map((item: CartModel) => {
      if (item.id === productId) {
        const totalQuantity = --item.totalQuantity;
        return {
          ...item,
          totalQuantity,
          totalCost: totalQuantity * item.price,
        };
      }
      return item;
    });
  }
}
