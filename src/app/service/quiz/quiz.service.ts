import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Quiz } from '../../interface/quiz';
import { Answer } from '../../interface/answer';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private service: HttpClient) { }

  getQuiz(): Observable<Quiz> {
    return this.service.get<Quiz>(
      `${environment.backendUrl}/quizz`
    );
  }

  getAnswer(questionId): Observable<Answer> {
    return this.service.get<Answer>(
      `${environment.backendUrl}/quizzresults/${questionId}`
    );
  }
}
