import { TestBed } from '@angular/core/testing';

import { PilarService } from './pilar.service';

describe('PilarService', () => {
  let service: PilarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PilarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
