import { Component, Input, OnInit, Output } from '@angular/core';
import { Question } from 'src/app/models/Question';
import { QuestionsService } from 'src/app/services/questions.service';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions: Question[] = [];
  

  constructor(private qs: QuestionsService
    // , firestore: AngularFirestore
    ) {
    

   
      // this.questions = firestore.collection<Question>('questions').valueChanges();
    
   }

  ngOnInit() {
    this.qs.getQuestions().subscribe((questions: any)  => {
      // console.log(questions); 
      this.questions = questions;
      
    }) ;

  //   this.qs.find((questions: { id: string; }) => question.id === qIdFromRoute).subscribe((questions: any)  => {
  //     // console.log(questions); 
  //     this.questions = questions;
      
  //   }) ;

  }

  


}

// export interface Question{ }
