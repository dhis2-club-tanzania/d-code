import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import {MatDialog} from '@angular/material/dialog';
import { LoginComponent } from 'src/app/login/login.component';


import { Question, questions } from 'src/app/models/Question';
import { QuestionsService } from 'src/app/services/questions.service';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore/firestore';
import { Observable } from 'rxjs';

// import {  question } from 'src/app/models/Question.component';

@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.css']
})
export class PromptComponent implements OnInit {


  @Input('width')
  public width!: number;
  @Input('height')
  public height!: number;
  @Input('left')
  public left!: number;
  @Input('top')
  public top!: number;
  
  //toggle-active
  public selectedVal1: string | undefined;


  //div-mat-card-buttons1
  solution:boolean=false;
  dataRef: any;


  promptFunction(){
    this.solution=false
}

scratchpadFunction(){
  this.solution=false
}

solutionFunction(){
  this.solution=true
}

videoFunction(){
  this.solution=false
}

questions: Question[] = [];
  question: Question | undefined;
  id!: Observable<Question>;
// private  firestore: AngularFirestore
constructor(public dialog: MatDialog,
  private qs: QuestionsService,
  private route: ActivatedRoute,

  ) {

    // const id: string = route.snapshot.paramMap.get('id');
    // console.log('Animal ID form URL: ', id)
   }
openDialog() {
  this.dialog.open(LoginComponent);
}

   // : void 
   ngOnInit() {
    this.selectedVal1 ='Prompt';


    // const routeParams = this.route.snapshot.paramMap;
    // const qIdFromRoute = String(routeParams.get('qId'));

    this.qs.getQuestions()
    .subscribe((questions: any)  => {
      console.log(questions); 
      this.questions = questions;
      // if (questions.id){
      //     // // // Find the product that correspond with the id provided in route.
      //   this.questions = questions.find((question: { id: string; }) => question.id === this.questions.id);
      // }
      
    }) ;

  
  // //         // First get the product id from the current route.
  //   const routeParams = this.route.snapshot.paramMap;
  //   const idFromRoute = String(routeParams.get('id'));

  // this.qs.getQuestions()
  // .subscribe((question: any)  => {
  //   console.log(question); 
  //   this.question = question;
  //   if (question.id){
  //        // Find the product that correspond with the id provided in route.
  //    this.question = questions.find((question: { id: string; }) => question.id === idFromRoute);
  //   }
  //   }) ;

  
  this.questionDetail();

  }

  questionDetail()  {
    const id = this.route.snapshot.paramMap.get("id");
    console.log(id); //I see the doc id correctly
  
    this.question = this.qs.getQDetails(id!) ;
    console.log(this.question);//I can't see the correct doc data


    // return this.qs.getQDetails(id!).then(question => {
    //   console.log(this.question);
    //   return this.question;  // ... and here
    //     });
  }


  public onVal1Change(val1: string) {
    this.selectedVal1 = val1

  }


}
