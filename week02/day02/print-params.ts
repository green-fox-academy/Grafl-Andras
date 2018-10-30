'use strict';
export{}

function printParams(...any){
 
    for (let i: number = 1; i < any.length; i++){
        console.log(any[i]);
    }
    
}
printParams(56, 77, "HELLO ",34, 54);