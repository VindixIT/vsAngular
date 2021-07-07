import { TestBed } from '@angular/core/testing';

import { PrevicService } from './previc.service';

describe('PrevicService', () => {
  let service: PrevicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrevicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
