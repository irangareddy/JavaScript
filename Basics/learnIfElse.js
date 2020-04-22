// Example 1

if (3>7) {
    console.log("Hey Man!!! I am inside if block")
}
else if (7>3) {
    console.log("Shit Man!!! you sent me another if block")
} else {
    console.log("Thanks Man!!! for sending me inside else block")
}

// Example 2

var whoIsHere = 'admin'

if (whoIsHere === 'user'){
    console.log("Hello, "+whoIsHere)
    console.log("You are ready to access content here...")
} else if (whoIsHere === 'admin') {
    console.log("Hello, "+whoIsHere)
    console.log("Make something big today...")
} else {
    console.log("MESSAGE: kindly verify your email")
    // just kidding:)
    console.log("Click here to send an verification mail")
}


// Grade Problem

// student grade :

// 9-10 -> Outstanding
// 8-9 -> Good
// 7-8 -> Average
// 6-7 -> Below Average
// below 6 -> Just Survivied

// Example 3

var studentGrade = 7

if (studentGrade>=9 && studentGrade<10){
    console.log("Outstanding")
}else if (studentGrade>=8 && studentGrade<9){
    console.log("Good")
}else if (studentGrade>=7 && studentGrade<8){
    console.log("Average")
}else if (studentGrade>=6 && studentGrade<7){
    console.log("Below Average")
}else if (studentGrade<6){
    console.log("Just Survivied")
}else {
    console.log("Not a valid StudentGrade")
}