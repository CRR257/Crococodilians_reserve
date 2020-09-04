import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../service/quiz/quiz.service';
import { Quiz } from '../../interface/quiz';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Answer } from '../../interface/answer';

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
  counter: number = 0;
  errorQuiz: Array<string> = [];
  showCounter: boolean = false;
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
    this.startCountdown(4);
  }

  buildForm() {
    this.form = new FormGroup({
      option: new FormControl('', Validators.required)
    });
  }

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

  setQuizImages(data) {
    this.quiz = data.map(obj =>
      Object.assign({}, obj, { image: 'assets/quiz/' + obj.image })
    );
    const index = 0;
    this.showQuestion(index);
    console.log(this.quiz);
  }

  startCountdown(seconds) {
    this.counter = seconds;
    const interval = setInterval(() => {
      if (this.counter > 0) {
      this.counter--;
      this.showCounter = true;
      } else if (this.counter === 0 ) {
        clearInterval(interval);
      }
    }, 2500);
  }

  showQuestion(index) {
    this.numberQuestion = index;
    this.showQuiz = this.quiz[this.numberQuestion];
    this.getAnswer(this.quiz[this.numberQuestion].id);
  }

  getAnswer(questionId) {
    this.quizService.getAnswer(questionId).subscribe(
      data => {
      this.answer = data;
    },
    error => {
      this.errorQuiz.push(error);
    })
  }

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

  nextQuestion() {
    this.showNextQuestion = false;
    this.form.reset();
    const index = this.numberQuestion + 1;
    if (index <= 9) {
    this.showQuestion(index);
    } else {
      this.showQuizResult = true;
    }
  }

  repeatQuizz() {
    this.showQuizResult = false;
    this.showQuestion(0);
  }
}
