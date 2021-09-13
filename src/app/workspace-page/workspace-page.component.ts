import { Component, OnInit } from '@angular/core';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import { NgZone, ViewChild} from '@angular/core';
// import {take} from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { AuthServiceService } from '../services/auth-service.service';
import {MatDialog} from '@angular/material/dialog';
import { DiffEditorModel, MonacoEditorModule, NgxEditorModel } from 'ngx-monaco-editor';
import { FormGroup, FormBuilder } from '@angular/forms';
// import { MonacoEditorConstructionOptions, MonacoEditorLoaderService } from '@materia-ui/ngx-monaco-editor';
import { take, filter } from 'rxjs/operators';
import { TimerComponent } from './timer/timer.component';
import { YourSolutionsComponent } from './your-solutions/your-solutions.component';
import { Question } from '../models/Question';
import { QuestionsService } from '../services/questions.service';
import { ActivatedRoute } from '@angular/router';
import { BugReportComponent } from '../dialogues/bug-report/bug-report.component';

interface Language {
  value: string;
  viewValue: string;
}

interface WLayout {
  value: string;
  viewValue: string;
}

interface Font {
  value: string;
  viewValue: string;
}

interface Editor {
  value: string;
  viewValue: string;
}

interface SyntaxTheme{
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-workspace-page',
  templateUrl: './workspace-page.component.html',
  styleUrls: ['./workspace-page.component.css']
})
export class WorkspacePageComponent implements OnInit {


//buttons-header typescript
  selectedValue: string | undefined;

  languages: Language[] = [
    {value: 'JavaScript-0', viewValue: 'JavaScript'},
    {value: 'C#-1', viewValue: 'C#'},
    {value: 'C++-2', viewValue: 'C++'},
    {value: 'Java-3', viewValue: 'Java'},
    {value: 'Python-4', viewValue: 'Python'},
    {value: 'TypeScript-5', viewValue: 'TypeScript'}
  ];

  selectedLanguage = this.languages[0].value;


  wlayouts: WLayout[] = [
    {value: 'Quad Layout-0', viewValue: 'Quad Layout'},
    {value: 'Tri Layout-1', viewValue: 'Tri Layout'}
  ];

  selectedWLayout = this.wlayouts[0].value;


  fonts: Font[] = [
    {value: '12px-0', viewValue: '12px'},
    {value: '13px-1', viewValue: '13px'},
    {value: '14px-2', viewValue: '14px'},
    {value: '15px-3', viewValue: '15px'},
    {value: '16px-4', viewValue: '16px'},
    {value: '17px-5', viewValue: '17px'},
    {value: '18px-6', viewValue: '18px'}
  ];

  selectedFont = this.fonts[2].value;




  editors: Editor[] = [
    {value: 'Sublime-0', viewValue: 'Sublime'},
    {value: 'Emacs-1', viewValue: 'Emacs'},
    {value: 'Vim-2', viewValue: 'Vim'}
  ];

  selectedEditor = this.editors[0].value;

  syntaxthemes: SyntaxTheme[] = [
    {value: 'Monokai-0', viewValue: 'Monokai'},
    {value: 'Cobalt-1', viewValue: 'Cobalt'},
    {value: 'Midnight-2', viewValue: 'Midnight'}
  ];

  selectedSyntaxTheme = this.syntaxthemes[0].value;

  home:boolean=false;

  
    data: any;
    editor: any;
 

  

  
  // questions: Observable<any[]>;
  questions: Question[] = [];
  question: Question | undefined;
  id!: Observable<Question>;
  results: any;
 

  code!: string;

   ys!: YourSolutionsComponent;
  constructor(
    public dialog: MatDialog,
    private _ngZone: NgZone,
    private firestore: AngularFirestore,
    public authservice: AuthServiceService,
    private qs: QuestionsService,
    private route: ActivatedRoute,
    
    // private monacoLoaderService: MonacoEditorLoaderService
    ) {
      // this.questions = firestore.collection('questions').valueChanges();

      // this.monacoLoaderService.isMonacoLoaded$.pipe(
      //   filter(isLoaded => isLoaded),
      //   take(1),
      // ).subscribe(() => {
      //      // here, we retrieve monaco-editor instance
      //     //  monaco.setTheme(...);
      // });

     }
  
  openDialog() {
    this.dialog.open(BugReportComponent);
  }

  variant = {};
  product = {};




  timerDialog() {
    this.dialog.open(TimerComponent);
  }

  onSubmit() {
    console.log(this.product);
    console.log(this.variant);
  }

  runcode(){
    return this.ys.runCode();
  }


  //toggle-active
  public selectedVal2: string | undefined;
  // : void 
  ngOnInit() {
    this.selectedVal2 ='Your Solutions';
  } 
  
 


  button_header:boolean = false;
  // button_header:boolean=false;
  button_headerFunction(){
  
    this.button_header = !this.button_header;
    // this.button_header=true
  }

  timer:boolean = false;
 
  timerFunction(){
  
    this.timer = !this.timer;
   
  }

  dark:boolean = true;
  light: boolean = false;
  darkFunction(){
  
    this.dark = !this.dark;
    this.light = true;
  
  }

  lightFunction(){
  
    this.dark = true;
    this.light = false
  }



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

 public onVal2Change(val2: string) {
  this.selectedVal2 = val2

}





























 

  // editorOptions = {theme: 'vs-dark', language: 'javascript'};
  // code: string= 'function x() {\nconsole.log("Hello world!");\n}';

  // onInit(editor: { getPosition: () => any; }) {
  //   let line = editor.getPosition();
  //   console.log(line);
  // }

  // jsonCode = [
  //   '{',
  //   '    "p1": "v3",',
  //   '    "p2": false',
  //   '}'
  // ].join('\n');

  // model: NgxEditorModel = {
  //   value: this.jsonCode,
  //   language: 'json',
  //   // uri: monaco.Uri.parse('a://b/foo.json')
  // };

  // options = {
  //   theme: 'vs-dark'
  // };
  // originalModel: DiffEditorModel = {
  //   code: 'heLLo world!',
  //   language: 'text/plain'
  // };

  // modifiedModel: DiffEditorModel = {
  //   code: 'hello orlando!',
  //   language: 'text/plain'
  // };

  // console.log("Hello");


  time!: number;
  display = "0:0:0 ";
  // display!: string;
  Sinterval!: NodeJS.Timeout;
  startSW:boolean = true;
  resumeSW: boolean = false;

 startStopwatch() {
    
    this.time = 0;
    this.Sinterval = setInterval(() => {
      if (this.time === 0) {
        this.time++;
      } else {
        this.time++;
      }
      this.display=this.transform( this.time)
    }, 1000);

    this.resumeSW = true;
    this.startSW = false;
  }



  transform(value: number): string {
    var sec_num = value; 
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    // if (hours   < 10) {hours   = 0;}
    // if (minutes < 10) {minutes = 0;}
    // if (seconds < 10) {seconds = 0;}
    return hours+':'+minutes+':'+seconds;
  }
  pauseStopwatch() {
    clearInterval(this.Sinterval);
  }

  stopStopwatch(){

    
  
       this.time = 0

        if (this.time === 0) {
          this.time = 0;
        } else {
          this.time = 0;
         
        }

        this.startSW = true;
      this.resumeSW = false;
  
      return  clearInterval(this.Sinterval), this.display = "0:0:0 ";
     
     
        
    }


  timeLeft!: number;
  Tinterval!: NodeJS.Timeout;
  Tdisplay = "0:0:0";
  // Tdisplay!: string;
  Tmessage!: string;
 
  startT:boolean = true;
  resumeT: boolean = false;
 

  

  startTimer() {
    this.resumeT = true;
    this.startT = false;

    this.Tinterval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      }
  
       else {
        this.timeLeft = 0;
      }
     
      this.Tdisplay=this.Ttransform( this.timeLeft)
     
     
    },1000);

   
 
  }



 

  Ttransform(value: number): string {


  var sec_num = value; 
  var hours   = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
  var seconds = sec_num - (hours * 3600) - (minutes * 60);

    // if (hours   < 10) {hours   = 0;}
    // if (minutes < 10) {minutes = 0;}
    // if (seconds < 10) {seconds = 0;}
    return hours+':'+minutes+':'+seconds; 

  }

  pauseTimer() {
    clearInterval(this.Tinterval);
  }

  stopTimer(){

  

       this.timeLeft = 0
     
      clearInterval(this.timeLeft)

      this.startT = true;
      this.resumeT = false;
  
      // return this.Tmessage = "Timer Complete!";
        
    }




  
}








