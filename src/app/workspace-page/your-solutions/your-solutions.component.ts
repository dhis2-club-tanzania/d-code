// import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
// import {CdkTextareaAutosize} from '@angular/cdk/text-field';
// import { NgZone, ViewChild} from '@angular/core';
// import {take} from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Question } from 'src/app/models/Question';
import { QuestionsService } from 'src/app/services/questions.service';
// import { Subscription } from 'rxjs';
import { initialCodeTemplate } from 'src/app/template/code.template';
// import { MonacoEditorModule } from 'ngx-monaco-editor';

@Component({
  selector: 'app-your-solutions',
  templateUrl: './your-solutions.component.html',
  styleUrls: ['./your-solutions.component.css']
})
export class YourSolutionsComponent implements OnInit {


  
  //toggle-active
  public selectedVal2: string | undefined;

    //div-mat-card-buttons2
    fullscreen:boolean=true;
    fullscreen_exit:boolean=false;
 
 
    // fullscreen_data:boolean=true;
  
    fullscreenFunction(){
      this.fullscreen=false;
      this.fullscreen_exit=true;
      // this.fullscreen_data=true
    }
  
    fullscreen_exitFunction(){
      this.fullscreen=true;
      this.fullscreen_exit=false;
      // this.fullscreen_data=true
    }

    questions: Question[] = [];
    question: Question | undefined;
    id!: Observable<Question>;
    results: any;
   

    code!: string;
    // onClick(){
    //   console.log(this.code);
    // }

  constructor(
    private qs: QuestionsService,
    private route: ActivatedRoute) { }

 

   // : void 
   ngOnInit() {

    // this.code = 


    this.selectedVal2 ='Your Solutions';
    this.qs.getQuestions()
    .subscribe((questions: any[])  => {
      console.log("Questions:",questions); 
      questions.forEach((question)=>{
        console.log(question.id.trim(),this.route.snapshot.paramMap.get("id")?.trim(),question.id.trim() === this.route.snapshot.paramMap.get("id")?.trim())
          if (question.id.trim() === this.route.snapshot.paramMap.get("id")?.trim()){
            // // // Find the product that correspond with the id provided in route.
            this.question = question;

            this.code = `function ${this.question?.functionName}(${this.question?.variables }) {
                                    
              // Write your code here
        
          }
        
        
          //You can not edit the line below
        
          exports.${  this.question?.functionName} = ${  this.question?.functionName};`

          // this.code = initialCodeTemplate;
        }
      })
      
    }) ;

  
    // this.code = initialCodeTemplate;

  
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

  public onVal2Change(val2: string) {
    this.selectedVal2 = val2
  
  }


  public runCode(){

    console.log(this.code);

    var template = "var exports ={}; {code};return exports;";
    var func = Function(template.split("{code}").join(this.code));
    var results = [];
    this.question?.tests.forEach((test)=>{
      var arg = Object.keys(test.inputs!).map((inputKey)=>test.inputs![inputKey])
      var result = func()["functionName"]?.apply(null,Array.prototype.slice.call(arg,1));
      results.push({
        name: test.name,
        pass: result == test.output
      })
    })

    console.log(this.results);

   
  }


  // editorOptions = {theme: 'vs-dark', language: 'javascript'};
  // code: string= 'function x() {\nconsole.log("Hello world!");\n}';







}
