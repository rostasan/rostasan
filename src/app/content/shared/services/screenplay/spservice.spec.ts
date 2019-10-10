import { TestBed, inject } from '@angular/core/testing';

import { SpService } from 'content/shared/services/screenplay/spservice';

describe('Sp.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpService]
    });
  });

  it('should be created', inject([SpService], (service: SpService) => {
    expect(service).toBeTruthy();
  }));
});
