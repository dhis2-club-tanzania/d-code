import { Component, Input, OnInit, Output } from '@angular/core';
// import { Question } from 'src/app/models/Question';
import { QuestionsService } from 'src/app/services/questions.service';
// import { AngularFirestore } from '@angular/fire/firestore';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions: Question[] = [];
    // questions: Observable<any[]>;
  // questions: Observable<Question[] >;
  // , firestore: AngularFirestore

  constructor(private qs: QuestionsService
    // , firestore: AngularFirestore
    ) {
    

   
      // this.questions = firestore.collection<Question>('questions').valueChanges();
    
   }

  ngOnInit() {
    this.qs.getQuestions().subscribe((questions: any)  => {
      console.log(questions); 
      this.questions = questions;
      
    }) ;
    // console.log('ngOninit ran') <Question[]>
  }

  


}

export interface Question{
  id?:string;
  Difficulty:string;
  Category?:string;
  Name?:string;
  Description?:string;
  functionName?:string;
  OUtput? : string
  Tests:[{
    Inputs: any, Output: string
  }];
  // Tests?:Array<Map<Inputs, Output>>;
  // Tests?:Array<Map<Inputs, Output>>;

}
