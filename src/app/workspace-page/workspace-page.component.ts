import { Component, OnInit } from '@angular/core';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import { NgZone, ViewChild} from '@angular/core';
// import {take} from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { AuthServiceService } from '../services/auth-service.service';
// import {MatDialog} from '@angular/material/dialog';
// import { LoginComponent } from '../login/login.component';
// import { Subscription } from 'rxjs';
import { DiffEditorModel, MonacoEditorModule, NgxEditorModel } from 'ngx-monaco-editor';
import { FormGroup, FormBuilder } from '@angular/forms';
// import { MonacoEditorConstructionOptions, MonacoEditorLoaderService } from '@materia-ui/ngx-monaco-editor';
import { take, filter } from 'rxjs/operators';

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

    //div-mat-card-buttons2
    fullscreen:boolean=true;
    fullscreen_exit:boolean=false;
    data: any;
    editor: any;

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

  
  questions: Observable<any[]>;

 
  constructor(
    // public dialog: MatDialog
    private _ngZone: NgZone,
    private firestore: AngularFirestore,
    public authservice: AuthServiceService,
    // private monacoLoaderService: MonacoEditorLoaderService
    ) {
      this.questions = firestore.collection('questions').valueChanges();

      // this.monacoLoaderService.isMonacoLoaded$.pipe(
      //   filter(isLoaded => isLoaded),
      //   take(1),
      // ).subscribe(() => {
      //      // here, we retrieve monaco-editor instance
      //     //  monaco.setTheme(...);
      // });

     }
  
  // openDialog() {
  //   this.dialog.open(LoginComponent);
  // }

  // : void 
  ngOnInit() {

  } 
  
 


  button_header:boolean=false;
  button_headerFunction(){
  
    this.button_header=true
  }

  // editorOptions = {theme: 'vs-dark', language: 'javascript'};
  // code: string = 'function x() {\nconsole.log("Hello world!");\n}';
  // originalCode: string = 'function x() { // TODO }';

  //   editorInit(editor: any) {
  //     // Here you can access editor instance
  //      this.editor = editor;
  //     }

  editorOptions = {theme: 'vs-dark', language: 'javascript'};
  code: string= 'function x() {\nconsole.log("Hello world!");\n}';

  onInit(editor: { getPosition: () => any; }) {
    let line = editor.getPosition();
    console.log(line);
  }

  jsonCode = [
    '{',
    '    "p1": "v3",',
    '    "p2": false',
    '}'
  ].join('\n');

  model: NgxEditorModel = {
    value: this.jsonCode,
    language: 'json',
    // uri: monaco.Uri.parse('a://b/foo.json')
  };

  options = {
    theme: 'vs-dark'
  };
  originalModel: DiffEditorModel = {
    code: 'heLLo world!',
    language: 'text/plain'
  };

  modifiedModel: DiffEditorModel = {
    code: 'hello orlando!',
    language: 'text/plain'
  };

  // console.log("Hello");
}








