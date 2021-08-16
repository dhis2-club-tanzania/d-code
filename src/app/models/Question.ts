



export interface Question{
  [x: string]: any;
  id?:string;
  Difficulty:string;
  Category?:string;
  Name?:string;
  Description?:string;
  functionName?:string;
  OUtput? : string
  Tests:[{
    Inputs: any, Output: string
  }];
  // Tests?:Array<Map<Inputs, Output>>;
  // Tests?:Array<Map<Inputs, Output>>;
  
  }