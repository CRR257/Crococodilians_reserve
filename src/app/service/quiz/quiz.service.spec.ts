import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { QuizService } from './quiz.service';


describe('QuizService', () => {
  let service: QuizService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ QuizService],
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.get(QuizService);
  });

  it('should be created', inject([QuizService], (service: QuizService) => {
    expect(service).toBeTruthy();
  }));

  it('should getQuiz', () => {
    const data = service.getQuiz();
    expect(data).toBeTruthy();
  });

  it('should getAnswer', () => {
    const data = service.getAnswer(1);
    expect(data).toBeTruthy();
  });

});
