import { TestBed } from '@angular/core/testing';

import { SubastaService } from './subasta.service';

describe('SubastaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubastaService = TestBed.get(SubastaService);
    expect(service).toBeTruthy();
  });
});
