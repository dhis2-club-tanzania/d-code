import { Injectable } from '@angular/core';
// import {  AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Question } from '../models/Question';
// import { map } from 'rxjs/operators';
// import { switchMap } from 'rxjs/operators';


import { DocumentChangeType, DocumentReference, DocumentData } from '@angular/fire/firestore';



              interface DocumentChangeAction {
                //'added' | 'modified' | 'removed';
                type: DocumentChangeType;
                payload: DocumentChange;
              }

              interface DocumentChange {
                type: DocumentChangeType;
                doc: DocumentSnapshot;
                oldIndex: number;
                newIndex: number;
              }

              interface DocumentSnapshot {
                exists: boolean;
                ref: DocumentReference;
                pId: string;
                // metadata: SnapshotMetadata;
                data(): DocumentData;
                get(fieldPath: string): any;
              }




@Injectable({
  providedIn: 'root'
} )


export class QuestionsService {


        questionsCollection!: AngularFirestoreCollection<Question>;
        questions:  Observable<Question[]> | any;
       

        // private questionsDoc: AngularFirestoreDocument<Question>;

 

  constructor(public afs:  AngularFirestore) { 
          this.questions = this.afs.collection<Question>('Questions').valueChanges();
      //     this.questionsCollection = afs.collection<Question>('Questions');
   

      // this.question = this.questionsCollection.snapshotChanges().pipe(switchMap(actions => {
      //     return actions.map(a => {
      //         const data = a.payload.doc.data() as Question;
      //         const id = a.payload.doc.id;
      //         console.log('id', id, 'data', data);
      //         return {id, data};
      //       }
      //     );
      // }))
   
      
      

      // this.questions.forEach((question: any) =>{
      //   console.log(question) 
      // })

            // this.questionsDoc = afs.doc<Question>('Questions');
            // this.questions = this.questionsDoc.valueChanges();
  }




  getQuestions(){
    return this.questions;
 
  }

  async getQDetails(id: string):Promise<any>{
    const doc = await this.afs
      // .doc('collectionName/docID'); 
      .collection("Questions")
      .doc(id)
      .ref.get();
      console.log("Doc:",doc);
    return Object.assign(doc.data(), {id: doc.id} );
  }
 
}



