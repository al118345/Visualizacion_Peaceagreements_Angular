import { TestBed } from '@angular/core/testing';

import { CambioCuentaService } from './cambio-cuenta.service';

describe('CambioCuentaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CambioCuentaService = TestBed.get(CambioCuentaService);
    expect(service).toBeTruthy();
  });
});
