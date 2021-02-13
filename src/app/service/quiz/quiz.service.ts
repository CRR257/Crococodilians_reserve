import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Quiz, Answer } from '../../shared';


@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private service: HttpClient) { }

  /**
   * Method to get quiz
   */
  getQuiz(): Observable<Quiz> {
    return this.service.get<Quiz>(
      `${environment.backendUrl}/quizz`
    );
  }

  /**
   * Method to get all answers
   */
  getAnswer(questionId): Observable<Answer> {
    return this.service.get<Answer>(
      `${environment.backendUrl}/quizzresults/${questionId}`
    );
  }
}
