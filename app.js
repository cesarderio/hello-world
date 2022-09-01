"use strict";
console.log("hello-world");



let usersName = prompt("What is your name? ");
let message;

if (usersName == "Kassie") {
  message = "Hello and welcome!";
} else if (usersName == "Raphael") {
  message = "Heyo!";
} else {
  message = "  Welcome to my site!   ";
}

document.write("Hi  " + usersName + "!");
document.write(message);


//let welcome = prompt("Do you like to hike?");
//let message;

//if (welcome == "yes") {
  //  message = "We can be friends!";
//} else ( welcome == "no") {
//    message = "Why not?";
//}

function askQuestion() {

 let greeting = prompt("do you like to hike?");
if (greeting == "yes") {
    document.write("We can be friends!");
} else {
    document.write("Why not?");
}
}
askQuestion()

let btn = document.createElement("button");
btn.innerHTML = "Click Me";
btn.onclick = function () {
    alert("Nice Job!")
};
document.body.appendChild(btn);




document.write("   Do you like to hike or spend time in the outdoors?");