import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateModule } from '@ngx-translate/core';

import { CarouselComponent } from './carousel.component';
import { ImagesService } from '../../service/images/images.service';


describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselComponent ],
      imports: [
        TranslateModule.forRoot(),
        HttpClientTestingModule
      ],
      providers: [ImagesService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should getImages', () => {
    spyOn(component, 'getImages').and.callThrough();
    component.getImages();
    expect(component.getImages).toHaveBeenCalled();
  });
});
