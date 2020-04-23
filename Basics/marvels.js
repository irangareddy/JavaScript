// Arrays

// Example 1

const superHeroes = ["Iron Man","Captain America","Thor","Spier Man"]

console.log(superHeroes);
console.log(superHeroes[3]);
console.log(superHeroes[2]);
console.log(superHeroes[superHeroes.length-1]);

// templating a String
console.log(`We have ${superHeroes.length} super heroes`);


// Example 2

const numbers = ['one','two','three','four','five','six']

// Updating the value in an Array

numbers[1] = 'Something'
console.log(numbers);


// start

console.log(numbers.shift())
console.log(numbers);

console.log(numbers.unshift("Something"))
console.log(numbers);


//  end

// removes the last element from the array

console.log(numbers.pop());
console.log(numbers);

// adds element to the array at last

numbers.push('Seven')
console.log(numbers);


// middle

numbers.splice(2,1,"MiddleOne","MiddleTwo")
console.log(numbers);
