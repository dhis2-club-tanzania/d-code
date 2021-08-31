
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';

import { Question } from 'src/app/models/Question';
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
  constructor( private qs: QuestionsService,
    private route: ActivatedRoute) { }

  // : void 


  ngOnInit() {
    this.selectedVal4 ='Custom Output';
    this.qs.getQuestions()
    .subscribe((questions: any[])  => {
      console.log("Questions:",questions); 
      questions.forEach((question)=>{
        console.log(question.id.trim(),this.route.snapshot.paramMap.get("id")?.trim(),question.id.trim() === this.route.snapshot.paramMap.get("id")?.trim())
          if (question.id.trim() === this.route.snapshot.paramMap.get("id")?.trim()){
            // // // Find the product that correspond with the id provided in route.
            this.question = question;
        }
      })
      
    }) ;


  this.questionDetail();

  

  } 



  async questionDetail()  {
    const id = this.route.snapshot.paramMap.get("id");
    console.log(id); 
  
    if(id){
      //this.question = await this.qs.getQDetails(id);
    }
    //this.question = id? await this.qs.getQDetails(id): '' ;
    console.log("This.Question:", this.question);


  }
  
  public onVal4Change(val4: string) {
    this.selectedVal4 = val4
  
  }

  public runCode(){
    var template = "var exports ={}; {code};return exports;"
    var func = Function(template.split("{code}").join("Code"));
    var results = [];
    this.question?.tests.forEach((test)=>{
      var arg = Object.keys(test.inputs!).map((inputKey)=>test.inputs![inputKey])
      var result = func()["functionName"].apply(null,Array.prototype.slice.call(arg,1));
      results.push({
        name: test.name,
        pass: result == test.output
      })
    })
  }


  // var func = Function("var exports ={}; function maxProfitWithKTransactions(prices, k) {};exports.maxProfitWithKTransactions = maxProfitWithKTransactions;return exports;") 

}
