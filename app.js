"use strict";
console.log("hello-world");

let welcome = prompt('Do you like to hike?');
let message;

if (welcome == "yes") {
    message = "We can be friends!";
} else ( welcome == "no") {
    message = "Why not?";
}

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