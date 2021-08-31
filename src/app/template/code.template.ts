
// question: Question | undefined;

export const initialCodeTemplate: string =  
// `function ${question?.functionName}(${question?.variables }) {
                                    
//     // Write your code here

// }


// //You can not edit the line below

// exports.${  question?.functionName} = ${  question?.functionName}};`

///////////

` function {{question.functionName}}({{question.variables}}) {

    // Write your code here

}

//You can not edit the line below

exports.{{  question.functionName}} = {{  question.functionName}};`