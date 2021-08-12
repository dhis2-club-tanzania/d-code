import { Component, OnInit } from '@angular/core';

import {MatDialog} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';




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

  selectedLanguage = this.languages[3].value;


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

//toggle-active
  public selectedVal1: string | undefined;
  public selectedVal2: string | undefined;
  public selectedVal3: string | undefined;
  public selectedVal4: string | undefined;


  home:boolean=false;

//div-mat-card-buttons1
  solution:boolean=false;


  promptFunction(){
    this.solution=false
}

scratchpadFunction(){
  this.solution=false
}

solutionFunction(){
  this.solution=true
}

videoFunction(){
  this.solution=false
}



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

  //div-mat-card-buttons3
  test:boolean=true;
  quicktest:boolean=false;
  info:boolean=true;

  testFunction(){
    this.test=true;
    this.quicktest=false;
    this.info=true
}

quicktestFunction(){
    this.test=false;
    this.quicktest=false;
    this.info=true
}

infoFunction(){
    this.test=false;
    this.quicktest=true;
    this.info=true
}



  constructor(public dialog: MatDialog) { }
  openDialog() {
    this.dialog.open(LoginComponent);
  }

  // : void 
  ngOnInit() {
    this.selectedVal1 ='Prompt';
    this.selectedVal2 ='Your Solutions';
    this.selectedVal3 ='Tests';
    this.selectedVal4 ='Custom Output'
  } 
  
  public onVal1Change(val1: string) {
    this.selectedVal1 = val1

  }

  public onVal2Change(val2: string) {
    this.selectedVal2 = val2
  
  }

  public onVal3Change(val3: string) {
    this.selectedVal3 = val3

  }

  public onVal4Change(val4: string) {
    this.selectedVal4 = val4
  
  }
}







  // div1:boolean=true;
  // div2:boolean=false;
  // div3:boolean=true;

  // div1Function(){
  //     this.div1=true;
  //     this.div2=false;
  //     this.div3=true
  // }

  // div2Function(){
  //     this.div2=false;
  //     this.div1=false;
  //     this.div3=true
  // }

  // div3Function(){
  //     this.div3=true;
  //     this.div2=true;
  //     this.div1=false
  // }

