import { Component, OnInit } from '@angular/core';
import { Question, SCode } from 'src/app/models/Question';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-submittedcodes',
  templateUrl: './submittedcodes.component.html',
  styleUrls: ['./submittedcodes.component.css']
})
export class SubmittedcodesComponent implements OnInit {

  panelOpenState = false;

  scodes: SCode[] = [];
 
  constructor(
    private qs: QuestionsService,
 
    ) {
    

 
   }

  ngOnInit() {
    this.qs.getCodes().subscribe((scodes: any)  => {
      console.log(scodes); 
      this.scodes = scodes;
      
    }) ;

  

  }

 
  

}
