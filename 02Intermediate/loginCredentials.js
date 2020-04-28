let userEmail = 'ranga123'
let password = '12345'

function userChecker(mailID) { 
    if ((mailID.includes('123')) && (mailID>6)) {
        return true
    }
    return false
}

console.log(userChecker(userEmail));

function passChecker(pass) { 
    console.log(pass.length)
    if ((pass.includes('123')) && (pass>6)) {
        return true
    }
    return false
}

console.log(passChecker(password));
