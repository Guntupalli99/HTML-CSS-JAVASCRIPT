const password = prompt("enter password")

if (password.length >= 6 && password.indexOf(' ') == -1) {
    console.log("valid password")
}

else {
    console.log("not valid password")
}
