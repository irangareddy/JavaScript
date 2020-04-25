let sayHello = function(name) {
    console.log(`Hello,${name}`)
    
}

sayHello('Super Hero')
sayHello(10)
sayHello(true)


let fullNameMaker = function(firstName,lastName) {
    console.log(`Welcome, ${firstName+' '+lastName}`);
}

fullNameMaker('Ranga','Reddy')


let multiply = function(num1,num2) { 
    return num1 * num2
}



let complexOperation = function(num1,num2){
    let complexAnswer = num1 + multiply(num1,num2) / num2
    console.log(`Multipiled Value: ${multiply(num1,num2)}`);
    return complexAnswer
}

let result = complexOperation(3,3)
console.log(`Complex Result: ${result}`)


let instaUser = function(username = 'unName',followersCount = 0) {
    return 'Hello, '+ username +' and your followers count is: '+ followersCount
}

console.log(instaUser('irangareddy',113));
