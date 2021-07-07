import { TestBed } from '@angular/core/testing';

import { TipoNotaService } from './tipoNota.service';

describe('TipoNotaService', () => {
  let service: TipoNotaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoNotaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
