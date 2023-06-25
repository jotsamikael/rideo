import { Component, OnInit } from '@angular/core';
import { EvaluationService } from 'src/app/services/evaluation.service';
import { interval } from 'rxjs'

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
   
  constructor(private questionService: EvaluationService) { }

  public questionList : any = [];
  public currentQuestion: number = 0;
  public points: number = 0;
  public counter: number = 60;

  correctAnswer: number = 0;
  inCorrectAnswer: number = 0;

  interval$: any;

  progress: string = '0';





  ngOnInit(): void {
    this.getQuizQuestion();
    this.startCounter();
    
  }

  getQuizQuestion(){
    this.questionService.getQuestions().subscribe(res => {
      console.log(res.questions)
      this.questionList = res.questions
    })
  }

  nextQuestion(){
    this.currentQuestion++;
  
  }

  previousQuestion(){
    this.currentQuestion--;

  }


  answer(currentQnb: number, option: any){
     if(option.correct){
       //increment 10 points
       this.points +=10;

       this.correctAnswer++;

       //move to the next question
       this.currentQuestion++;

       this.resetCounter();
        

       this.getProgressPercent();

     } else{

       //move to the next question
       this.currentQuestion++;

       this.inCorrectAnswer++; 
      
       this.resetCounter();

       this.getProgressPercent();
     
     }
  }

  startCounter(){
    this.interval$ = interval(1000).subscribe(
      val=>{
        this.counter--;
        if(this.counter === 0){
          //go to the next question
          this.currentQuestion++;

          //set counter back to 60s
          this.counter = 60;
        }
      }
    );
    setTimeout(() => {
      this.interval$.unsubscribe();
    }, 600000);
  }

  stopCounter(){
    this.interval$.unsubscribe();
    this.counter = 0;
  }

  resetCounter(){
   this.stopCounter();
   this.counter = 60;
   this.startCounter();
   console.log("reset")
  }

  resetQuiz(){
    //reset counter
    this.resetCounter();

    //get all quiz questions
    this.getQuizQuestion()

    //set counter to 0
     this.counter = 0;

    //set points to 0
    this.points = 0;

    //set current question to 0
    this.currentQuestion = 0;

    //reset progress to 0
    this.progress = '0';
  }

  getProgressPercent(){
    this.progress = ((this.currentQuestion/this.questionList.length)*100).toString();
    return this.progress; 
  }
}
