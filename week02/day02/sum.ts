'use strict';
export{}

let countNum: number = 3;


function sum(countNum) {
    let result: number=0;
    for (let i: number = 1; i<=countNum; i++){
        result += i;
    }
return result;

}
console.log(sum(countNum));