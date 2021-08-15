import { ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

const enum Status {
  OFF = 0,
  RESIZE = 1,
  MOVE = 2
}

@Component({
  selector: 'app-code-outputs',
  templateUrl: './code-outputs.component.html',
  styleUrls: ['./code-outputs.component.css']
})
export class CodeOutputsComponent implements OnInit {


  @Input('width')
  public width!: number;
  @Input('height')
  public height!: number;
  @Input('left')
  public left!: number;
  @Input('top')
  public top!: number;
  @ViewChild("box")
  public box!: ElementRef; 
  private boxPosition!: { left: number; top: number; }; 
  private containerPos!: { left: number; top: number; right: number; bottom: number; }; 
  public mouse!: { x: number; y: number; };
  public status: Status = Status.OFF;
  private mouseClick!: { x: number; y: number; left: number; top: number; };

  ngAfterViewInit(){
    this.loadBox();
    this.loadContainer();
  }

private loadBox(){
  const {left, top} = this.box.nativeElement.getBoundingClientRect();
  this.boxPosition = {left, top};
}

private loadContainer(){
  const left = this.boxPosition.left - this.left;
  const top = this.boxPosition.top - this.top;
  const right = left + 600;
  const bottom = top + 450;
  this.containerPos = { left, top, right, bottom };
}

setStatus(event: MouseEvent, status: number){
  if(status === 1) event.stopPropagation();
  else if(status === 2) this.mouseClick = { x: event.clientX, y: event.clientY, left: this.left, top: this.top };
  else this.loadBox();
  this.status = status;
}

@HostListener('window:mousemove', ['$event'])
onMouseMove(event: MouseEvent){
  this.mouse = { x: event.clientX, y: event.clientY };

  if(this.status === Status.RESIZE) this.resize();
  // else if(this.status === Status.MOVE) this.move();
}

private resize(){
  if(this.resizeCondMeet()){
    this.width = Number(this.mouse.x > this.boxPosition.left) ? this.mouse.x - this.boxPosition.left : 0;
    this.height = Number(this.mouse.y > this.boxPosition.top) ? this.mouse.y - this.boxPosition.top : 0;
  }
}

private resizeCondMeet(){
  return (this.mouse.x < this.containerPos.right && this.mouse.y < this.containerPos.bottom);
}

  //toggle-active
  public selectedVal4: string | undefined;

  constructor() { }

  // : void 
  ngOnInit() {
    this.selectedVal4 ='Custom Output';
  } 
  
  public onVal4Change(val4: string) {
    this.selectedVal4 = val4
  
  }

}
