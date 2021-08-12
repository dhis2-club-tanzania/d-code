



export interface Question{
    id?:string;
    Difficulty?:string;
    Category?:string;
    Name?:string;
    Description?:string;
    functionName?:string;
    Tests?:Array<any>;
    // Tests?:Array<Map<Inputs, Output>>;
    // Tests?:Array<Map<Inputs, Output>>;
  
  }