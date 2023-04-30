import { TestBed } from '@angular/core/testing';

import { CartControllerService } from '../cart.controller.service';

describe('CartControllerService', () => {
  let service: CartControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
// Обычно таких файло 1, максимум 2, поэтому не принято создавать для них отдельную папку
