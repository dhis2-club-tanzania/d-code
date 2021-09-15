import { Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  constructor( private qs: QuestionsService) { }


  ngOnInit() {
    this.qs.currentSdisplay.subscribe(Sdisplay => this.Sdisplay = Sdisplay)
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

   
   

   time!: number;
   Sdisplay = "0:0:0 ";
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
       this.Sdisplay=this.transform( this.time)
       this.qs.changeSdisplay(this.Sdisplay)
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
    return this.qs.changeSdisplay(this.Sdisplay)
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
   
       return  clearInterval(this.Sinterval),
        this.Sdisplay = "0:0:0 ",
       this.qs.changeSdisplay(this.Sdisplay);
       
      
      
         
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
       this.qs.changeTdisplay(this.Tdisplay)
      
      
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
     return this.qs.changeTdisplay(this.Tdisplay);
   }
 
   stopTimer(){
 
   
 
        this.timeLeft = 0
      
       clearInterval(this.timeLeft)

       this.startT = true;
       this.resumeT = false;

      // return this.qs.changeTdisplay(this.Tdisplay)
 
      
   
       // return this.Tmessage = "Timer Complete!";
         
     }

}
