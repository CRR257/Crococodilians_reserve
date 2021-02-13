import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CrocodiliansService } from './crocodilians.service';

describe('CrocodiliansService', () => {
  let service : CrocodiliansService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrocodiliansService],
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.get(CrocodiliansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should getCrocodilians', () => {
    const data = service.getCrocodilians();
    expect(data).toBeTruthy();
  });
});
