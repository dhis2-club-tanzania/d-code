import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import {MatDialog} from '@angular/material/dialog';
import { LoginComponent } from 'src/app/login/login.component';


import { Question } from 'src/app/models/Question';
import { QuestionsService } from 'src/app/services/questions.service';
import { ActivatedRoute } from '@angular/router';

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
question!: Question ;
constructor(public dialog: MatDialog,
  private qs: QuestionsService,
  private route: ActivatedRoute,
    // , firestore: AngularFirestore
  ) {
     // this.questions = firestore.collection<Question>('questions').valueChanges();
   }
openDialog() {
  this.dialog.open(LoginComponent);
}

   // : void 
   ngOnInit() {
    this.selectedVal1 ='Prompt';

    this.qs.getQuestions().subscribe((questions: any)  => {
      console.log(questions); 
      this.questions = questions;
      
    }) ;
  
  // //         // First get the product id from the current route.
  const routeParams = this.route.snapshot.paramMap;
  const qIdFromRoute = String(routeParams.get('qId'));

  // // // Find the product that correspond with the id provided in route.
  this.question = this.question.find((question: { id: string; }) => question.id === qIdFromRoute);
  
  // this.questionDetail();

  }

  // questionDetail() {
  //   const id = this.route.snapshot.paramMap.get("id");
  //   console.log(id); //I see the doc id correctly
  
  //   //  this.qs.getQuestionsD({id : string; }).then(data => {
  //   //   console.log(data);  // ... and here});
  // }


  public onVal1Change(val1: string) {
    this.selectedVal1 = val1

  }


}
