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

document.write("   Do you like to hike or spend time in the outdoors?");