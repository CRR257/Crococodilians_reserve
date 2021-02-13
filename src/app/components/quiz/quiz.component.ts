import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../service/quiz/quiz.service';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Quiz, Answer } from '../../shared';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})

export class QuizComponent implements OnInit {
  form: FormGroup;
  quiz: Quiz;
  showQuiz: Quiz;
  answer: Answer;
  numberQuestion: number = 0;
  errorQuiz: Array<string> = [];
  answerSelected: string;
  answerIsCorrect: boolean;
  totalCorrectAnswers: number = 0;
  answerExplanation: string;
  showNextQuestion: boolean = false;
  showQuizResult: boolean = false;

  constructor( private quizService: QuizService ) { }

  ngOnInit(): void {
    this.buildForm();
    this.getQuiz();
  }

  buildForm() {
    this.form = new FormGroup({
      option: new FormControl('', Validators.required)
    });
  }

  /**
   * Method de get quiz data
   */
  getQuiz() {
    this.quizService.getQuiz().subscribe(
      data => {
      this.quiz = data;
      if (data) {
        this.setQuizImages(data);
      }
    },
    error => {
      this.errorQuiz.push(error);
    })
  }

  /**
   * Method de image's quiz
   */
  setQuizImages(data) {
    this.quiz = data.map(obj =>
      Object.assign({}, obj, { image: 'assets/quiz/' + obj.image })
    );
    const index = 0;
    this.showQuestion(index);
    console.log(this.quiz);
  }

  /**
   * Method to get question
   */
  showQuestion(index) {
    this.numberQuestion = index;
    this.showQuiz = this.quiz[this.numberQuestion];
    this.getAnswer(this.quiz[this.numberQuestion].id);
  }

  /**
   * Method to get answer
   */
  getAnswer(questionId) {
    this.quizService.getAnswer(questionId).subscribe(
      data => {
      this.answer = data;
    },
    error => {
      this.errorQuiz.push(error);
    })
  }

  /**
   * Method to submit answer selected
   */
  submit(){
    this.answerSelected = this.form.value.option;
    this.answerExplanation = this.answer.answerExplanation;
    this.showNextQuestion = true;
    if (this.answer.correctAnswer === this.answerSelected) {
      this.answerIsCorrect = true;
      this.totalCorrectAnswers = this.totalCorrectAnswers + 1;
    } else {
      this.answerIsCorrect = false;
    }
  }

  /**
   * Method to get next question
   */
  nextQuestion() {
    this.showNextQuestion = false;
    window.scroll(0,0);
    this.form.reset();
    const index = this.numberQuestion + 1;
    if (index <= 9) {
    this.showQuestion(index);
    } else {
      this.showQuizResult = true;
    }
  }

  /**
   * Method to repeat quiz when user finish the quiz
   */
  repeatQuizz() {
    this.showQuizResult = false;
    this.totalCorrectAnswers = 0;
    this.showQuestion(0);
  }
}
