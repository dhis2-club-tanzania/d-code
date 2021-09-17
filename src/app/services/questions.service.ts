import { Injectable } from '@angular/core';
// import {  AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
// import { Observable } from 'rxjs';
import { Question } from '../models/Question';
import {of, BehaviorSubject, Observable} from 'rxjs';
import { YourSolutionsComponent } from '../workspace-page/your-solutions/your-solutions.component';





@Injectable({
  providedIn: 'root'
} )


export class QuestionsService {


        questionsCollection!: AngularFirestoreCollection<Question>;
        questions:  Observable<Question[]> | any;
        questionsCData:  Observable<Question[]> | any;
        questionsDData:  Observable<Question[]> | any;
        Cquestions: any;
        // Cquestions:  Observable<Question[]> | any;
        Dquestions:  any;
        Rquestions:  any;
   
        public userdata!: Observable<YourSolutionsComponent[]> | any;

 

  constructor(public afs:  AngularFirestore,
    // public userdata : YourSolutionsComponent
    ) { 
          this.questions = this.afs.collection<Question>('Questions', ref => ref.orderBy('name','asc')).valueChanges();
          // this.questionsRData = this.afs.collection<Question>('Questions');
          this.questionsCData = this.afs.collection<Question>('Questions', ref => ref.orderBy('category','asc'));
          this.questionsDData = this.afs.collection<Question>('Questions', ref => ref.orderBy('difficulty','asc'));
          


            this.Cquestions = this.questionsCData.valueChanges();
            this.Dquestions = this.questionsDData.valueChanges();
  
  }




  getQuestions(){
    
    return this.questions;
 
  }

  getCQuestions(){
  
    return this.Cquestions;
 
  }

  getDQuestions(){
    return this.Dquestions;
 
  }


  async getQDetails(id: string):Promise<any>{
    const doc = await this.afs
      // .doc('collectionName/docID'); 
      .collection("Questions")
      .doc(id)
      .ref.get();
      console.log("Doc:",doc);
    return Object.assign(doc.data(), {id: doc.id} );
  }


  default(){
    // else{
      alert('You must choose a question!');
    // }
  }
  

  // private _data: BehaviorSubject<any> = new BehaviorSubject<any>(null)

  // getData(): Observable<any> {
  //   return this._data
  //   // .asObservable()
  //   ;
  // }

  // setData(data: any) {
  //   this._data.next(data);
  // }

  // getSomeData() {
  //   return of([
  //     {id: 1, name: 'Name 1'},
  //     // {id: 2, name: 'Name 2'},
  //     // {id: 3, name: 'Name 3'},
  //   ]);
  // }
  
  // getSData() {

  //   // console.log(this.getSData());

  //   // console.log(`${this.userdata.runCode()}`);
  

  //  return of([{id: 2, car: 'Suzuki'}, 
  //  {id: 3, car: `${this.userdata.coderesults}` }
  // ]);


//     return 
//       this.userdata = "heyyy";
    // }

   
    Sdisplay!: string ;
    Tdisplay!: string ;
    private SdisplaySource = new BehaviorSubject(this.Sdisplay);
    private TdisplaySource = new BehaviorSubject(this.Tdisplay);
    currentSdisplay = this.SdisplaySource.asObservable();
    currentTdisplay = this.TdisplaySource.asObservable();

    changeSdisplay(Sdisplay: string) {
      this.SdisplaySource.next(Sdisplay)
    }

    changeTdisplay(Tdisplay: string) {
      this.TdisplaySource.next(Tdisplay)
    }

    // finalC!: string ;
    // private finalCSource = new BehaviorSubject(this.finalC);
    // currentfinalC = this.finalCSource.asObservable();
    // changefinalC(finalC: string) {
    //   this.finalCSource.next(finalC)
    // }

    code!: string ;
    private finalCSource = new BehaviorSubject(this.code);
    currentfinalC = this.finalCSource.asObservable();
    changefinalC(code: string) {
      this.finalCSource.next(code)
    }
  
}



