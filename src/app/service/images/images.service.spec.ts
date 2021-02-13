import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ImagesService } from './images.service';

describe('ImagesService', () => {
  let service: ImagesService;
  beforeEach(() => {
    TestBed.configureTestingModule({
    providers: [ImagesService],
    imports: [
      HttpClientTestingModule
    ]
  });
  service = TestBed.get(ImagesService);
});

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should getImages', () => {
    const data = service.getImages();
    expect(data).toBeTruthy();
  });
});
