var readlineSync = require("readline-sync");

// functions
function welcomeUser() {
  console.log("Could I have your name please.")
  var firstName = readlineSync.question("\nFirst Name: ");
  var lastName = readlineSync.question("Last Name: ");
  console.log(`\nWelcome ${firstName} ${lastName}.\nLet's play a game.`);
}

function play(userAnswer, realAnswer) {
  if (userAnswer.toUpperCase() == realAnswer.toUpperCase()) {
    score += 1;
    console.log("You're right!");
  } else {
    score -= 0.25;
    console.log("You're Wrong!")
  }
  console.log(`Current Score: ${score}`);
}

// questions array
var questionsList = [
  {
    que: "\nHow many Infinity Stones are there in Marvel?: ",
    ans: "6"
  },
  {
    que: "\nWhere do I live? ",
    ans: "Indore"
  },
  {
    que: "\nWhere is Captain America from? ",
    ans: "Brooklyn"
  },
  {
    que: "\nWhat type of doctor is Doctor Strange? ",
    ans: "Neurosurgeon"
  },
  {
    que: "\nWhose power exceeds that of the sorceror supreme? ",
    ans: "Wanda"
  }
];

//initialising variables
var score = 0;
let length = questionsList.length;

welcomeUser();

// calling the quiz
for (i = 0; i < length; i++) {
  var currentQuestion = questionsList[i];
  var userAnswer = readlineSync.question(currentQuestion.que);
  var realAnswer = currentQuestion.ans;
  play(userAnswer, realAnswer)
}

console.log(`\nYour final score: ${score}`);