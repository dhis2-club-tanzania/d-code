import { Injectable } from '@angular/core';
// import {  AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Question } from '../models/Question';


@Injectable({
  providedIn: 'root'
} )


export class QuestionsService {
  questionsCollection!: AngularFirestoreCollection<Question>;
  questions:  Observable<Question[]>;
  constructor(public afs:  AngularFirestore) { 
    this.questions = this.afs.collection<Question>('Questions').valueChanges();
  }

  getQuestions(){
    return this.questions;
  }
}



