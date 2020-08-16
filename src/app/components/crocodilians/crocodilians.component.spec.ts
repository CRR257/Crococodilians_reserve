import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrocodiliansComponent } from './crocodilians.component';

describe('CrocodiliansComponent', () => {
  let component: CrocodiliansComponent;
  let fixture: ComponentFixture<CrocodiliansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrocodiliansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrocodiliansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
