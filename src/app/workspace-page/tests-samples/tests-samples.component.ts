import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tests-samples',
  templateUrl: './tests-samples.component.html',
  styleUrls: ['./tests-samples.component.css']
})
export class TestsSamplesComponent implements OnInit {

  @Input('width')
  public width!: number;
  @Input('height')
  public height!: number;
  @Input('left')
  public left!: number;
  @Input('top')
  public top!: number;

  //toggle-active
  public selectedVal3: string | undefined;

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


  constructor() { }

  // : void 
  ngOnInit() {
    this.selectedVal3 ='Tests';
  } 
  

  public onVal3Change(val3: string) {
    this.selectedVal3 = val3

  }

}
