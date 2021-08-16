import { Component, Input, OnInit } from '@angular/core';

import { Question } from 'src/app/models/Question';
import { QuestionsService } from 'src/app/services/questions.service';


@Component({
  selector: 'app-tests-samples',
  templateUrl: './tests-samples.component.html',
  styleUrls: ['./tests-samples.component.css']
})
export class TestsSamplesComponent implements OnInit {

  @Input('width')
  public width!: number;
  @Input('height')
  public height!: number;
  @Input('left')
  public left!: number;
  @Input('top')
  public top!: number;

  //toggle-active
  public selectedVal3: string | undefined;

  //div-mat-card-buttons3
  test:boolean=true;
  quicktest:boolean=false;
  info:boolean=true;

  testFunction(){
    this.test=true;
    this.quicktest=false;
    this.info=true
}

quicktestFunction(){
    this.test=false;
    this.quicktest=false;
    this.info=true
}

infoFunction(){
    this.test=false;
    this.quicktest=true;
    this.info=true
}

questions: Question[] = [];
  constructor(
    private qs: QuestionsService
      // , firestore: AngularFirestore
      ) { 
         // this.questions = firestore.collection<Question>('questions').valueChanges();
      }

  // : void 
  ngOnInit() {
    this.selectedVal3 ='Tests';
    
    this.qs.getQuestions().subscribe((questions: any)  => {
      console.log(questions); 
      this.questions = questions;
      
    }) ;
  } 
  

  public onVal3Change(val3: string) {
    this.selectedVal3 = val3

  }

}
