import { Component, Input, OnInit, Output } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Question } from 'src/app/models/Question';
import { QuestionsService } from 'src/app/services/questions.service';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions: Question[] = [];
  Cquestions: Question[] = [];
  Dquestions: Question[] = [];
  // Rquestions: Question[] = [];

  constructor(
    private qs: QuestionsService,
    // public gqs: QuestionsService
    // , firestore: AngularFirestore
    ) {
    

   
      // this.questions = firestore.collection<Question>('questions').valueChanges();
    
   }

  ngOnInit() {
    this.qs.getQuestions().subscribe((questions: any)  => {
      // console.log(questions); 
      this.questions = questions;
      
    }) ;

    this.qs.getCQuestions().subscribe((Cquestions: any)  => {
      
      // this.questions =  this.Cquestions;
      this.Cquestions = Cquestions;
      console.log(this.Cquestions); 
      
    }) ;


    this.qs.getDQuestions().subscribe((Dquestions: any)  => {
      
      // this.questions =  this.Cquestions;
      this.Dquestions = Dquestions;
      
    }) ;




  }

  category:boolean = false;
  random:boolean = true;
  difficulty:boolean = false;
  active:boolean = true;
  cactive:boolean = false;
  dactive:boolean = false;
  getCQuestions(){
    // console.log(this.questions);
    // return this.questions = this.Cquestions;
    this.category = true;
    this.cactive = true;
    this.active = false;
    this.dactive = false;
    this.difficulty = false;
    this.random = false;

    // return this.qs.getCQuestions();
 
  }

  getDQuestions(){
    // console.log(this.questions);
    // return this.questions = this.Cquestions;
    this.category = false;
    this.difficulty = true;
    this.random = false;
    this.dactive = true;
    this.cactive = false;
    this.active = false;
    // return this.qs.getCQuestions();
 
  }

  getRQuestions(){
    // console.log(this.questions);
    // return this.questions = this.Cquestions;
    this.category = false;
    this.difficulty = false;
    this.random = true;
    this.active = true;
    this.cactive = false;
    this.dactive = false;
    // return this.qs.getCQuestions();
 
  }


}

// export interface Question{ }
