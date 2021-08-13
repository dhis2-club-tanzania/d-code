



export interface Question{
    // id?:string;
    Difficulty?:string;
    Category?:string;
    Name?:string;
    Description?:string;
    functionName?:string;
    // Tests?:Array<any>;
    Tests?:Array<Map<any, string>>;
    // Tests?:Array<Map<Inputs, Output>>;
  
  }