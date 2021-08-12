import { Component, OnInit } from '@angular/core';

// import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
// import { QuestionsComponent } from './questions/questions.component';
import { AngularFirestore } from '@angular/fire/firestore';
// import { async, Observable } from 'rxjs';
// import { Question } from './questions-page.component'; 

// import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Question { Name: string; }



@Component({
  selector: 'app-questions-page',
  templateUrl:
   './questions-page.component.html '

//   ' <div>
//   {{ (question | async)?.Name }}
// </div> '
 
  ,
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





 questions: Observable<any[]>;

  constructor(firestore: AngularFirestore) {
    this.questions = firestore.collection('questions').valueChanges();
  }





  // public question: Observable<any>[] = [];
  // constructor( fDb : AngularFireDatabase) { 

  //   const itemsRef: AngularFireList<any> = fDb.list('question');
  //   itemsRef.valueChanges().subscribe(
  //     x=> {this.question = x;}
  //   );

  // }

  ngOnInit(): void {
  }

}
function styleUrls(arg0: { selector: string; templateUrl: string; }, arg1: {}, Name: any, arg3: any, styleUrls: any, arg5: string[]) {
  throw new Error('Function not implemented.');
}

