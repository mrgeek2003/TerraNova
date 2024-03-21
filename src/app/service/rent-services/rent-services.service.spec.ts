import { TestBed } from '@angular/core/testing';

import { RentServicesService } from './rent-services.service';

describe('RentServicesService', () => {
  let service: RentServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
