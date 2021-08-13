import { Component, OnInit } from '@angular/core';

// import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
// import { QuestionsComponent } from './questions/questions.component';
import { AngularFirestore } from '@angular/fire/firestore';

// import { Question } from './questions-page.component'; 

// import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

// export interface Question { Name: string; }

 

@Component({
  selector: 'app-questions-page',
  templateUrl: './questions-page.component.html',
  styleUrls: ['./questions-page.component.css'] 
})
export class QuestionsPageComponent implements OnInit {

  home:boolean=false;


  // private questionDoc: AngularFirestoreDocument<Question>;
  // question$: Observable<Question | undefined>;
  // constructor(afs: AngularFirestore) {
  //   this.questionDoc = afs.doc<Question>('question/1');
  //   this.question$ = this.questionDoc.valueChanges();
  // }
  // update(question: Question) {
  //   this.questionDoc.update(question);
  // }



  // constructor(firestore: AngularFirestore) {}

 questions: Observable<any[]>;

  constructor(firestore: AngularFirestore) {
    this.questions = firestore.collection('questions').valueChanges();
  }





  

  ngOnInit(): void {
  }

}

