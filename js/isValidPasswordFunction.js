function isValidPassword (userName, passWord) {
    if (passWord.length >= 8 && !passWord.includes(" ") && !passWord.includes(userName)) {
        return true;
    } else {
        return false;
    }
}

let yourUserName = prompt("Enter your username: ");
let yourPassWord = prompt("enter your password: ");

isValidPassword(yourUserName, yourPassWord) ? console.log("Your username is ok") : console.log("Your username is not strong enough.");
