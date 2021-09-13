import { Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  constructor() { }

  variant = {};

  @Output() onVariantChange = new EventEmitter();

  ngOnInit() {}
  // send data from this component to the product

 

//   time: number = 0;
//   display = "00:00:00";
//   interval!: NodeJS.Timeout;

//  startStopwatch() {
//     console.log("=====>");
//     this.interval = setInterval(() => {
//       if (this.time === 0) {
//         this.time++;
//       } else {
//         this.time++;
//       }
//       this.display=this.transform( this.time)
//     }, 1000);
//   }
//   transform(value: number): string {
//     var sec_num = value; 
//     var hours   = Math.floor(sec_num / 3600);
//     var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
//     var seconds = sec_num - (hours * 3600) - (minutes * 60);

//     if (hours   < 10) {hours   = 0;}
//     if (minutes < 10) {minutes = 0;}
//     if (seconds < 10) {seconds = 0;}
//     return hours+':'+minutes+':'+seconds;
//   }
//   pauseStopwatch() {
//     clearInterval(this.interval);
//   }


//   timeLeft!: number;

//   startTimer() {
//     this.interval = setInterval(() => {
//       if(this.timeLeft > 0) {
//         this.timeLeft--;
//       } else {
//         this.timeLeft = 0;
//       }
//       this.display=this.transform( this.timeLeft)
//     },1000)
//   }

//   pauseTimer() {
//     clearInterval(this.interval);
//   }



  time: number = 0;
  // display = "0:0:0 ";
  display!: string;
  Sinterval!: NodeJS.Timeout;

 startStopwatch() {
    console.log("=====>");
    this.Sinterval = setInterval(() => {
      if (this.time === 0) {
        this.time++;
      } else {
        this.time++;
      }
      this.display=this.transform( this.time)
    }, 1000);
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
    //  if( 
       this.time == 0;
      // ){
      clearInterval(this.Sinterval)
    // }else{
    //   this.startTimer()
    // }
      return  this.time == 0, this.display = "Stopwatch Complete";
        
    }


  timeLeft!: number;
  Tinterval!: NodeJS.Timeout;
  // Tdisplay = "0:0:0";
  Tdisplay!: string;
  Tmessage!: string;
  Tdone = 0;
  // hours: any;
  // minutes: any;
  // timeInput: any;
  // seconds: any;

  

  startTimer() {
    this.Tinterval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      }
  
       else {
        this.timeLeft = 0;
      }
      // this.timeInput = `${this.hours} : ${this.minutes} : ${this.seconds}`
      this.Tdisplay=this.Ttransform( this.timeLeft)
    },1000)

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
    //  if( 
       this.timeLeft = 0
      // ){
      clearInterval(this.timeLeft)
    // }else{
    //   this.startTimer()
    // }
      return this.Tmessage = "Timer Complete!";
        
    }


    onChange() {
      // this.variant = this.timeLeft;
     this.onVariantChange.emit(this.variant)
   }

}
