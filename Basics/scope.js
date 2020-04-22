// let vs var

let iAmGlobal = 'someValue'

console.log(iAmGlobal);
if (true) {
    let iAmLocal = 'someMoreValue'

//if you declared a variable with var then its gobally accessable and changable

    iAmGlobal = 'SuperMan'
    console.log(iAmGlobal);
    console.log(iAmLocal);


    // iAmLocal scope ends here !!!
}
console.log(iAmGlobal);

// console.log(iAmLocal);


// Best Example Ever

// King's Teritory Problem

let king = 'John Doe'

if (true) {
    let king = 'Ranga'
    
    if (true) {
        let king = 'Arjun'
        console.log(king);
        
    }
}

if (true) {
    console.log("I am the second part: "+king)
}