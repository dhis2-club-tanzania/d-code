import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';


 

@Component({
  selector: 'app-questions-page',
  templateUrl: './questions-page.component.html',
  styleUrls: ['./questions-page.component.css'] 
})
export class QuestionsPageComponent implements OnInit {

  home:boolean=false;


 questions: Observable<any[]>;

  constructor(firestore: AngularFirestore) {
    this.questions = firestore.collection('questions').valueChanges();
  }





  

  ngOnInit(): void {
  }

}

