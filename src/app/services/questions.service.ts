import { Injectable } from '@angular/core';
import {  AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Question } from '../models/Question';

// export interface Question { Name: string }

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
  // question:  Observable<Question> ;
  // private questionsDoc: AngularFirestoreDocument<Question>;


  constructor(public afs:  AngularFirestore) { 
    this.questions = this.afs.collection<Question>('Questions').valueChanges();
    // this.questionsCollection = afs.collection<Question>('Questions');
    // this.questions = this.questionsCollection.valueChanges();

    // this.questionsDoc = afs.doc<Question>('Questions/1');
    // this.questions = this.questionsDoc.valueChanges();
  }

  getQuestions(){
    return this.questions;
  }

  // async find(id : string){
  //   const doc = await this.afs
  //     .collection("Questions")
  //     .doc(id)
  //     .ref.get();
  //   return doc.data();
  // }
}



