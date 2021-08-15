import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import { NgZone, ViewChild} from '@angular/core';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-your-solutions',
  templateUrl: './your-solutions.component.html',
  styleUrls: ['./your-solutions.component.css']
})
export class YourSolutionsComponent implements OnInit {

  @Input('width')
  public width!: number;
  @Input('height')
  public height!: number;
  @Input('left')
  public left!: number;
  @Input('top')
  public top!: number;
  
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

  constructor(private _ngZone: NgZone) { }

  @ViewChild('autosize')
  autosize!: CdkTextareaAutosize;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }

   // : void 
   ngOnInit() {
    this.selectedVal2 ='Your Solutions';
  } 

  public onVal2Change(val2: string) {
    this.selectedVal2 = val2
  
  }


}
