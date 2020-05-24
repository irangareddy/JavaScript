var ranga = {
    name: 'I am Ranga Reddy',
    age: 20,
    profession: 'iOS Developer',
    isActive: true,
}

var shiva = {
    name: 'I am Shiva',
    age: 21,
    profession: 'Web Developer',
    isActive: false,
}

var jeevan = {
    name: 'I am Jeevan Reddy',
    age: 21,
    profession: 'Lazy boy',
    isActive: true,
}

let users = new Map()
// Setting Values

users.set('ranga',ranga)
users.set('shiva',shiva)
users.set('jeevan',jeevan)

// Using Size
console.log();
console.log("printing size");
console.log('----------------');
console.log(users.size);

// Using valid key
console.log();
console.log("Using a valid key");
console.log('----------------');
console.log(users.get('jeevan'));

// Getting keys
console.log();
console.log("Printing all keys");
console.log('----------------');
console.log(users.keys());

// Getting values
console.log();
console.log("Printing all values");
console.log('----------------');
console.log(users.values());


//  Using ForOf
console.log();
console.log("Using ForOf");
console.log('----------------');

for (const value of users.values()) {
    console.log(`${value.name},${value.age} old ${value.profession}` )
}

for (const [key, value] of users.entries()) {
    console.log(key + ' = '+ value.name )
}


//  Using ForEach
console.log();
console.log("Using ForEach");
console.log('----------------');
users.forEach((value,key) => console.log(key + ' = '+ value.profession))

//  Using Array's

console.log();
console.log("Using Array's");
console.log('----------------');
var arrOfArr = [['one','1'],['two','2'],['three','3'],['four','4'],['five','5']]

var newMap = new Map(arrOfArr)

newMap.forEach((value,key) => console.log(key + ' = '+ value))