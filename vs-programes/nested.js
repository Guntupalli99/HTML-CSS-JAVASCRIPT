const password = prompt("enter the password")

if (password.length > 6) {
    if (password.indexOf(' ') == -1) {
        console.log("valid password")
    }
    else {
        console.log("no spaces are allowed")
    }

}
else {
    console.log("password is too short")
}


