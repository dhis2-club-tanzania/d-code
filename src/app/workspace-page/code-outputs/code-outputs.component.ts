
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';

import { Question, SCode } from 'src/app/models/Question';
import { QuestionsService } from 'src/app/services/questions.service';



@Component({
  selector: 'app-code-outputs',
  templateUrl: './code-outputs.component.html',
  styleUrls: ['./code-outputs.component.css']
})
export class CodeOutputsComponent implements OnInit {


  //toggle-active
  public selectedVal4: string | undefined;
  questions: Question[] = [];
  question: Question | undefined;
  id!: Observable<Question>;
  scodes: SCode[] = [];
  // scodes: SCode = {
  //   questionName: '',
  //   submittedCode: '',
  //   user: ''
  // }
  constructor( private qs: QuestionsService,
    private route: ActivatedRoute) { }

  // : void 

  data: any[] = [];
  
  userData: any[] = [];
  finalC!: string;
  code!: string;

  scode!: SCode ;
  
  
  ngOnInit() {
    this.selectedVal4 ='Custom Output';
    this.qs.getQuestions()
    .subscribe((questions: any[])  => {
      // console.log("Questions:",questions); 
      questions.forEach((question)=>{
        // console.log(question.id.trim(),this.route.snapshot.paramMap.get("id")?.trim(),question.id.trim() === this.route.snapshot.paramMap.get("id")?.trim())
          if (question.id.trim() === this.route.snapshot.paramMap.get("id")?.trim()){
            // // // Find the product that correspond with the id provided in route.
            this.question = question;
        }
      })
      
    }) ;

////add submitted codes view
    this.qs.getCodes().subscribe((scodes: any)  => {
      console.log(scodes); 
      this.scodes = scodes;
      
    }) ;

  // this.questionDetail();

  // this.qs.getData().subscribe(
  //   (data: any) => this.data = data
  // );

  // this.qs.currentfinalC.subscribe(finalC => this.finalC = finalC); ///submit code
  this.qs.currentfinalC.subscribe(code => this.code = code);

  } 



  
  public onVal4Change(val4: string) {
    this.selectedVal4 = val4
  
  }

  coderesults! : string;
  @Output() myEvent = new EventEmitter();

  submitCode(){
    // this.qs.changefinalC(this.childMessage)

    this.coderesults = this.childMessage;
    // console.log(this.coderesults);
    // this.myEvent.emit(null)

    // this.childMessage = `${this.scode?.submittedCode}`  ;
    console.log(this.childMessage);
  }


  // sCode(){
  //   this.qs.changefinalC(this.code)

  //   console.log(this.code)
  //   // this.myEvent.emit(null)
  // }


  @Input()
  childMessage!: string;
  
  onSubmit(){
    // const submittedCode = `${this.scode?.questionName}`;
    this.scode.submittedCode = this.childMessage;
    // this.childMessage = `${this.scode?.submittedCode}`  ;
    console.log(this.childMessage);

  }

  
  // var func = Function("var exports ={}; function maxProfitWithKTransactions(prices, k) {};exports.maxProfitWithKTransactions = maxProfitWithKTransactions;return exports;") 

}
