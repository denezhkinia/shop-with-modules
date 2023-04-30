import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductModel } from '../products/models/product.model';
import { ProductsMock } from '../products/mocks/product.mock';

@Component({
  selector: 'swm-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstComponent {
  products: Array<ProductModel> = ProductsMock;
}
