import { Category } from '../models/category.enum';
import { ProductModel } from '../models/product.model';

export const ProductsMock: Array<ProductModel> = [
  {
    id: 1,
    name: 'B Samsung',
    description: 'Small mobile with camera',
    price: 100,
    category: Category.Mobile,
    isAvailable: true,
  },
  {
    id: 2,
    name: 'A Nokia',
    description: 'Small mobile without camera and screen',
    price: 10,
    category: Category.Mobile,
    isAvailable: true,
  },
  {
    id: 3,
    name: 'Hewlett Packard',
    description: 'Good laptop',
    price: 1356,
    category: Category.Laptop,
    isAvailable: true,
  },
  {
    id: 4,
    name: 'Lenovo',
    description: 'Good laptop',
    price: 1236,
    category: Category.Laptop,
    isAvailable: true,
  },
];
