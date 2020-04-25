// == operator (Equality) Content
// === operator (Identity) Memory location also


// Equality Example

let String1 = ''
let String2 = ''

console.log(String1 == String2);
console.log(String1 === String2);


// Identity Example


let myVar = {}
let myVarTwo = {}

console.log({} === {});

console.log(myVar == myVarTwo);
console.log(myVar === myVarTwo);

let myVarThree = myVar

console.log(myVar == myVarThree);
console.log(myVar === myVarThree);

