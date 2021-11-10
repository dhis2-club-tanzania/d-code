


export interface test{
  input:Array<any>;
  output:any
}
export interface Question{
  id?:string;
  difficulty?:string;
  category?:string;
  name?:string;
  description?:string;
  functionName?:string;
  output? : string,
  
  tests:[
    {
      name?: string,
      
      inputs?: undefined,

      output?: undefined
    }
  ],
  variables?: undefined

  }


  export interface SCode{
    id?:string;
    questionName?:string;
    submittedCode?:string;
    user? : string,
  
    }
