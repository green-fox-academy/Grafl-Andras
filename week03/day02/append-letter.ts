'use strict';
// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.

let far: string[] = ['bo', 'anacond', 'koal', 'pand', 'zebr'];

function appendA(far){
    for (let i: number = 0; i < far.length; i++){
        far[i]+='a';
    }
    return far;
}
console.log(appendA(far));

// The output should be: 'boa', 'anaconda', 'koala', 'panda', 'zebra'
/*let typo: string = "Chinchill";
function appendAFunc(typo) {
    console.log(typo+"a");
}
appendAFunc(typo);*/

export = appendA;