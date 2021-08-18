import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { AuthServiceService } from '../services/auth-service.service';


 

@Component({
  selector: 'app-questions-page',
  templateUrl: './questions-page.component.html',
  styleUrls: ['./questions-page.component.css'] 
})
export class QuestionsPageComponent implements OnInit {

  home:boolean=false;


 questions: Observable<any[]>;

  constructor(firestore: AngularFirestore,
               public authservice: AuthServiceService) {
               this.questions = firestore.collection('questions').valueChanges();
            }





  

  ngOnInit(): void {
  }

}

