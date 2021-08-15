import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import {MatDialog} from '@angular/material/dialog';
import { LoginComponent } from 'src/app/login/login.component';

@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.css']
})
export class PromptComponent implements OnInit {


  @Input('width')
  public width!: number;
  @Input('height')
  public height!: number;
  @Input('left')
  public left!: number;
  @Input('top')
  public top!: number;
  
  //toggle-active
  public selectedVal1: string | undefined;


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


constructor(public dialog: MatDialog) { }
openDialog() {
  this.dialog.open(LoginComponent);
}

   // : void 
   ngOnInit() {
    this.selectedVal1 ='Prompt';
  } 
  
  public onVal1Change(val1: string) {
    this.selectedVal1 = val1

  }


}
