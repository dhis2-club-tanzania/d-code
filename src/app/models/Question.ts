



export interface Question{
  [x: string]: any;
  id?:string;
  Difficulty?:string;
  Category?:string;
  Name?:string;
  Description?:string;
  functionName?:string;
  OUtput? : string
  // Tests:
  // {
  //   Inputs: any, Output: string
  // };
 
  Tests?:Array<string>;
  // Tests?:Array<Map<Inputs, Output>>;
  }

  export const questions = [
    // {
    //   id: "1M",
    //   Difficulty: "Medium",
    //   Category: "Linked LIsts",
    //   Name: "string",
    // },
    // {
    //   id: "1E",
    // },
    // {
    //   id: "1H",
    // },
    // {
    //   id: "1VH",
    // },
  ]