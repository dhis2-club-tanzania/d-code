
import { Component, EventEmitter, OnInit, Output  } from '@angular/core';
// import {CdkTextareaAutosize} from '@angular/cdk/text-field';
// import { NgZone, ViewChild} from '@angular/core';
// import {take} from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Question } from 'src/app/models/Question';
import { QuestionsService } from 'src/app/services/questions.service';
import { initialCodeTemplate } from 'src/app/template/code.template';
// import { MonacoEditorModule } from 'ngx-monaco-editor';

@Component({
  selector: 'appyoursolutions',
  templateUrl: './your-solutions.component.html',
  styleUrls: ['./your-solutions.component.css']
})
export class YourSolutionsComponent implements OnInit {


  
  //toggle-active
  public selectedVal2: string | undefined;

    //div-mat-card-buttons2
    fullscreen:boolean=true;
    fullscreen_exit:boolean=false;

 
  
    fullscreenFunction(){
      this.fullscreen=false;
      this.fullscreen_exit=true;
    }
  
    fullscreen_exitFunction(){
      this.fullscreen=true;
      this.fullscreen_exit=false;
    }

    questions: Question[] = [];
    question: Question | undefined;
    id!: Observable<Question>;
    
   

    code!: string;
    originalcode!: string;


  constructor(
    private qs: QuestionsService,
    private route: ActivatedRoute) 
    {
      // this.qs.currentfinalC.subscribe(finalC => this.finalC = finalC);
      this.qs.currentfinalC.subscribe(code => this.code = code);
     }

 

   // : void 

  //  dlab!: string;
   ngOnInit() {
     


    this.selectedVal2 ='Your Solutions';

    
    this.qs.getQuestions()
    .subscribe((questions: any[])  => {
      // console.log("Questions:",questions); 
      questions.forEach((question)=>{
        // console.log(question.id.trim(),this.route.snapshot.paramMap.get("id")?.trim(),question.id.trim() === this.route.snapshot.paramMap.get("id")?.trim())
          if (question.id.trim() === this.route.snapshot.paramMap.get("id")?.trim()){
            // // // Find the product that correspond with the id provided in route.
            this.question = question;
            console.log("Questions:",question);
            this.originalcode = `function ${this.question?.functionName}(${this.question?.variables }) {
                         
              // Write your code here 
        
          }
        
        
          //You can not edit the line below
        
          exports.${  this.question?.functionName} = ${  this.question?.functionName};`

          this.code = this.originalcode;
        }
      })
      
    }) ;
    this.qs.currentfinalC.subscribe(code => this.code = code);
   


 
 

  } 
  



  public onVal2Change(val2: string) {
    this.selectedVal2 = val2
  
  }


  refresh(){
    return this.code = this.originalcode;
  }

  
  coderesults! : string;
  // coderesults = this.code;
  @Output() messageEvent = new EventEmitter<string>();

  public runCode(){


    // console.log(this.code);

  

    var template = "var exports ={code}; {code};return exports;";
    var func = Function(template.split("{code}").join(this.code));
    var results = [];
    this.question?.tests.forEach((test)=>{
      var arg = Object.keys(test.inputs!).map((inputKey)=>test.inputs![inputKey])
      var result = func()["functionName"]?.apply(null,Array.prototype.slice.call(arg,1));
       results.push({
        name: test.name,
        pass: result == test.output
      })
    });


    this.coderesults = this.code;

    // console.log(this.coderesults);
    // console.log(this.finalCode());
    this.messageEvent.emit(this.coderesults)
   
  }


  finalC!: string;
  // finalC = this.code;
  public finalCode(){

    // this.code = this.coderesults;
    // this.finalC = this.code;
    this.finalC = this.coderesults;
    // this.qs.changefinalC(this.code)
    // console.log(this.runCode());
    // console.log(this.coderesults);
    console.log(this.code);
    console.log(this.finalC);
    // this.messageEvent.emit(this.coderesults)
  }
 

  // editorOptions = {theme: 'vs-dark', language: 'javascript'};
  // code: string= 'function x() {\nconsole.log("Hello world!");\n}';


  // const getName = () => {
  //   return 'Jim';
  // };
  
  // exports.getName = this.getName;




}
