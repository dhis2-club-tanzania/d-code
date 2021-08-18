import { Component, OnInit } from '@angular/core';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import { NgZone, ViewChild} from '@angular/core';
import {take} from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { AuthServiceService } from '../services/auth-service.service';
// import {MatDialog} from '@angular/material/dialog';
// import { LoginComponent } from '../login/login.component';




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
    public authservice: AuthServiceService
    ) {
      this.questions = firestore.collection('questions').valueChanges();
     }

   

  
  // openDialog() {
  //   this.dialog.open(LoginComponent);
  // }


  @ViewChild('autosize')
  autosize!: CdkTextareaAutosize;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }
  // : void 
  ngOnInit() {
    // this.selectedVal1 ='Prompt';
    // this.selectedVal2 ='Your Solutions';
    // this.selectedVal3 ='Tests';
    // this.selectedVal4 ='Custom Output';
  } 
  



  button_header:boolean=false;
  button_headerFunction(){
  
    this.button_header=true
  }




}








