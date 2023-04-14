import { TestBed } from '@angular/core/testing';

import { ProductsControllerService } from '../products.controller.service';

describe('ProductsControllerService', () => {
  let service: ProductsControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
