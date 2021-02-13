import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateModule } from '@ngx-translate/core';

import { QuizComponent } from './quiz.component';
import { QuizService } from '../../service/quiz/quiz.service';

describe('QuizComponent', () => {
  let component: QuizComponent;
  let fixture: ComponentFixture<QuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizComponent ],
      imports: [
        TranslateModule.forRoot(),
        HttpClientTestingModule
      ],
      providers: [QuizService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should getQuiz', () => {
    spyOn(component, 'getQuiz').and.callThrough();
    component.getQuiz();
    expect(component.getQuiz).toHaveBeenCalled();
  });
});
