


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
      
      inputs?: { undefined: any }

      output?: undefined,
      variables?: undefined
    }
  ],
  variables?: undefined

  }

