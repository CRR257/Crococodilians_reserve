import { TestBed } from '@angular/core/testing';

import { CrocodiliansService } from './crocodilians.service';

fdescribe('CrocodiliansService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrocodiliansService = TestBed.get(CrocodiliansService);
    expect(service).toBeTruthy();
  });
});
