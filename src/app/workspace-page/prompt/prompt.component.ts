import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import {MatDialog} from '@angular/material/dialog';
import { LoginComponent } from 'src/app/login/login.component';


import { Question} from 'src/app/models/Question';
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
    .subscribe((questions: any[])  => {
      console.log("Questions:",questions); 
      questions.forEach((question)=>{
        console.log(question.id.trim(),this.route.snapshot.paramMap.get("id")?.trim(),question.id.trim() === this.route.snapshot.paramMap.get("id")?.trim())
          if (question.id.trim() === this.route.snapshot.paramMap.get("id")?.trim()){
            // // // Find the product that correspond with the id provided in route.
            this.question = question;
        }
      })
      
    }) ;

  
 

  
  this.questionDetail();

  }

  async questionDetail()  {
    const id = this.route.snapshot.paramMap.get("id");
    console.log(id); 
  
    if(id){
      //this.question = await this.qs.getQDetails(id);
    }
    //this.question = id? await this.qs.getQDetails(id): '' ;
    console.log("This.Question:", this.question);


  }


  public onVal1Change(val1: string) {
    this.selectedVal1 = val1

  }




}
