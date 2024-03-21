import { TestBed } from '@angular/core/testing';

import { BuyServicesService } from './buy-services.service';

describe('BuyServicesService', () => {
  let service: BuyServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuyServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
