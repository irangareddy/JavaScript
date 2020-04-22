// && - And operator - Both sides need to be true
// || - Or operator  - one side need to be true

let isVerified = false
let isLoggedIn = true
let hasPaymentToken = true
let isGuest = true

if(isLoggedIn && isVerified && hasPaymentToken){
    console.log("Hello, User")
    console.log("Access Content")
} else if (isVerified || isGuest) {
    console.log("Allow Preview of the content")
} else {
    console.log("Please Contact")
}

// Not ! operator

if (!false) {
    console.log("It became True Buddy!!!")
}