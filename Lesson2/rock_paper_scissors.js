const readline = require('readline-sync');
const VALID_CHOICE = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const SCORE = { you: 0, computer: 0 };

function prompt(message) {
  console.log(`=> ${message}`);
}

function isWinner(yourChoice, opponentChoice) {
  if (
    (yourChoice === 'rock' &&
      (opponentChoice === 'scissors' || opponentChoice === 'lizard')) ||
    (yourChoice === 'paper' &&
      (opponentChoice === 'spock' || opponentChoice === 'rock')) ||
    (yourChoice === 'scissors' &&
      (opponentChoice === 'paper' || opponentChoice === 'lizard')) ||
    (yourChoice === 'lizard' &&
      (opponentChoice === 'spock' || opponentChoice === 'paper')) ||
    (yourChoice === 'spock' &&
      (opponentChoice === 'rock' || opponentChoice === 'scissors'))
  ) {
    return true;
  } else return false;
}

function isLoser(yourChoice, opponentChoice) {
  if (
    (yourChoice === 'rock' &&
      (opponentChoice === 'spock' || opponentChoice === 'paper')) ||
    (yourChoice === 'paper' &&
      (opponentChoice === 'lizard' || opponentChoice === 'scissors')) ||
    (yourChoice === 'scissors' &&
      (opponentChoice === 'rock' || opponentChoice === 'spock')) ||
    (yourChoice === 'lizard' &&
      (opponentChoice === 'rock' || opponentChoice === 'scissors')) ||
    (yourChoice === 'spock' &&
      (opponentChoice === 'lizard' || opponentChoice === 'paper'))
  ) {
    return true;
  } else return false;
}

function displayWinner(choice, computerChoice) {
  if (isWinner(choice, computerChoice)) {
    prompt('You win!');
  } else if (isLoser(choice, computerChoice)) {
    prompt('Computer wins!');
  } else {
    prompt("It's a tie");
  }
}

function computeScore(choice, computerChoice) {
  if (isWinner(choice, computerChoice)) {
    SCORE.you++;
  } else if (isLoser(choice, computerChoice)) {
    SCORE.computer++;
  }
}

function resetScore() {
  SCORE.you = 0;
  SCORE.computer = 0;
}

function isScissorOrSpock() {
  prompt("Which one is it? 1) scissor, or 2) Spock: ");
  let choice = readline.question();
  while (!["1", "2"].includes(choice)) {
    prompt("Really, which one is it? type in 1 for scissor, or type 2 for spock.");
    choice = readline.question();
  }
  if (choice === "1") return "scissor";
  return "spock";
}

function expendShortedInput(char) {
  let fullInput = "";
  switch (char) {
    case "r":
      fullInput = "rock";
      break;
    case "p":
      fullInput = "paper";
      break;
    case "l":
      fullInput = "lizard";
      break;
    case "s":
      fullInput = isScissorOrSpock();
      break;
  }
  return fullInput;
}

while (true) {

  prompt(`Choose one: ${VALID_CHOICE.join(', ')}`);
  let choice = readline.question();
  if (VALID_CHOICE.map(el => el[0]).includes(choice)) {
    choice = expendShortedInput(choice);
  }

  while (!VALID_CHOICE.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICE.length);
  let computerChoice = VALID_CHOICE[randomIndex];

  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  displayWinner(choice, computerChoice);
  computeScore(choice, computerChoice);

  prompt(`You won ${SCORE.you} times`);
  prompt(`Computer won ${SCORE.computer} times`);

  if (SCORE.you === 5) {
    prompt('You are the grand winner!!!');
  } else if (SCORE.computer === 5) {
    prompt('Computer is the grand winner!!!');
  }

  if (SCORE.you === 5 || SCORE.computer === 5) {
    prompt('Do you want to play the match of 5 games again (y/n)?');
    let answer = readline.question().toLowerCase();

    while (answer[0] !== 'n' && answer[0] !== 'y') {
      prompt('Please enter "y" or "n".');
      answer = readline.question().toLowerCase();
    }

    if (answer[0] !== 'y') break;
    resetScore();

  }
}
