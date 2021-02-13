import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateModule } from '@ngx-translate/core';

import { CrocodiliansComponent } from './crocodilians.component';
import { CrocodiliansService } from '../../service/crocodilians/crocodilians.service';

describe('CrocodiliansComponent', () => {
  let component: CrocodiliansComponent;
  let fixture: ComponentFixture<CrocodiliansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrocodiliansComponent ],
      imports: [
        TranslateModule.forRoot(),
        HttpClientTestingModule
      ],
      providers: [CrocodiliansService]
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

  it('should getCrocodilians', () => {
    const crocodilian = {
      age: 14,
      breed: "Black Caiman",
      id: 1,
      image: "jack.jpeg",
      name: "Jack",
    }
    // spyOn(component, 'getCrocodilians').and.callThrough();
    // let data = component.getCrocodilians();
    // expect(component.getCrocodilians).toHaveBeenCalled();
    // expect(data[0]).toEqual(crocodilian);


    
  });

  // component.getData().subscribe(data => {
  //   expect(data).toEqual([1, 2, 3, 4]);
  //   expect(component.dataUpdated).toEqual(true);
  //   done();
  // }
  //   );
});



