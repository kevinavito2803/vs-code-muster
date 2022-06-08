var database = [
  {
    username: "nico",
    password: "Italienwm2006!",
  },
  {
    username: "kevin",
    password: "123!",
  },
  {
    username: "Alisa",
    password: "4567!",
  },
  {
    username: "michi",
    password: "8978!",
  },
];

var newsFeed = [
  {
    username: "Bobby",
    timeline: "So fucking angry because of stornos",
  },
  {
    username: "Sally",
    timeline: "Baufi ohne Storni is so fucking cool",
  },
];

var userNamePrompt = prompt("Whats your username?");
var passwordPrompt = prompt("Whats your password");

function isUserValid(username, password) {
  for (var i = 0; i < database.length; i++) {
    if (
      database[i].username === username &&
      database[i].password === password
    ) {
      return true;
    } 
  }
  return false;
}

function signIn(username, password) {
  if (isUserValid(username, password)) {
    console.log(newsFeed);
  } else {
    alert("Sorry, dein Password oder Username ist falsch");
  }
}

signIn(userNamePrompt, passwordPrompt);
