import { Component, OnInit } from '@angular/core';
import { Option, Question, Quiz, QuizConfig } from '../models/index';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  providers: [QuizService]
})

export class QuizComponent implements OnInit {
  quizes: any[];
  quiz: Quiz = new Quiz(null);
  
  mode = 'quiz';
  quizName: string;
  config: QuizConfig = {
    'allowBack': true,
    'allowReview': true,
    'autoMove': false,  
    
    'pageSize': 1,
    'requiredAll': false, 
    
    'shuffleQuestions': false,
    'shuffleOptions': false,
    
    'showPager': true,
    
  };

  pager = {
    index: 0,
    size: 1,
    count: 1
  };

  constructor(private quizService: QuizService) { }

  ngOnInit() {
   this.quizes = this.quizService.getAll();
    
this.loadQuiz(this.quizName);
  }

  loadQuiz(quizName: string) {
    this.quizService.get(quizName).subscribe(res => {
      this.quiz = new Quiz(res);
    this.pager.count = this.quiz.questions.length;
   });
  
  } 

 get filtered() {
    return (this.quiz.questions) ?
    this.quiz.questions.slice(this.pager.index, this.pager.index + this.pager.size) : [];
  }

  onSelect(question: Question, option: Option) {
    if (question.questionTypeId === 1) {
      question.options.forEach((x) => { if (x.id !== option.id) x.selected = false; });
    }

   
  }

  goTo(index: number) {
    if (index >= 0 && index < this.pager.count) {
      this.pager.index = index;
     this.mode = 'quiz';
    }
  }

  isAnswered(question: Question) {
   return question.options.find(x => x.selected) ? 'Answered' : 'Not Answered';
  };

  isCorrect(question: Question) {
    return question.options.every(x => x.selected === x.isAnswer) ? 'correct' : 'wrong';
  };

  onSubmit() {
    let answers = [];
    this.quiz.questions.forEach(x => answers.push({ 'quizId': this.quiz.id, 'questionId': x.id, 'answered': x.answered }));

  
    console.log(this.quiz.questions);
  this.mode = 'result';
  }
}   

