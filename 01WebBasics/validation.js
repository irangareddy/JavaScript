function myValidation() {
    let myValue = document.getElementById('myform').value
    if (isNaN(myValue) || myValue < 1 || myValue > 20) {
        console.log("failed");
        
    } else {
        console.log("success")
    }
}

// document.querySelector('.myform').addEventListener('submit', (event) => {
//     event.preventDefault()
//     console.log(event.target.username.value);
//     console.log(event.target.realname.value);
//     event.target.username.value = ""
//     event.target.realname.value = ""
    
// })

document.querySelector('.signup').addEventListener('submit' ,(event)=> {
    event.preventDefault()
    console.log(event.target.username.value);


    var password = event.target.password.value 
    var repassword =  event.target.repassword.value

    console.log(password);
    console.log(repassword);
    event.target.username.value = ""
    event.target.password.value = ""
    event.target.repassword.value = ""


    if (password.count != repassword.count) {
        console.log("Password Mismatch");
        alert("Password Mismatch")
    } else {
        // console.log("Successfully Logged");
        // alert("Successfully Logged")
    }

})

function mySignUpValidation() {

    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
    let repassword = document.getElementById('repassword').value

    if (username != "") {
        if (password === repassword) {
            alert('Successfully Logged In')
        } else {
            alert('Password Mismatch')
        }
    } else {
        alert('Enter a valid Username')
    }

    
}