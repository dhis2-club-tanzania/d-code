import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/Question';
import { QuestionsService } from 'src/app/services/questions.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions: Question[] = [];
  // questions: Observable<Question[] | undefined>; , firestore: AngularFirestore

  constructor(private qs: QuestionsService) {
    

   
      // this.questions = firestore.collection<Question>('questions').valueChanges();
    
   }

  ngOnInit() {
    this.qs.getQuestions().subscribe(questions => {
      // console.log(questions);
      this.questions = questions;
    });
    // console.log('ngOninit ran')
  }

}
