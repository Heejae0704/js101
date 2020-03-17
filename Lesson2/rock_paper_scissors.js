const readline = require('readline-sync');
const VALID_CHOICE = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const SCORE = { you: 0, computer: 0 };

function prompt(message) {
  console.log(`=> ${message}`);
}

function whoIsWinner(yourChoice, opponentChoice) {
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
    return "you";
  } else if (yourChoice === opponentChoice) {
    return "even";
  } else return "computer";
}

function getVerb(win, loose) {
  if (win === "paper" && loose === "rock") return "covers";
  if (win === "paper" && loose === "spock") return "disproves";
  if (win === "rock" && loose === "lizard") return "crushes";
  if (win === "rock" && loose === "scissors") return "crushes";
  if (win === "scissors" && loose === "paper") return "cuts";
  if (win === "scissors" && loose === "lizard") return "decapitates";
  if (win === "spock" && loose === "rock") return "vaporizes";
  if (win === "spock" && loose === "scissors") return "smashes";
  if (win === "lizard" && loose === "paper") return "eats";
  return "poisons";
}

function displayWinner(result) {
  if (result === "you") {
    prompt('You win!\n');
  } else if (result === "computer") {
    prompt('Computer wins!\n');
  } else {
    prompt("It's a tie\n");
  }
}

function computeScore(result) {
  if (SCORE.hasOwnProperty(result)) {
    SCORE[result]++;
  }
}

function resetScore() {
  SCORE.you = 0;
  SCORE.computer = 0;
}

function isScissorOrSpock() {
  prompt("Which one is it? 1) scissors, or 2) spock: ");
  let choice = readline.question();
  while (!["1", "2"].includes(choice)) {
    prompt("Really, which one is it? type in 1 for scissors, or type 2 for spock.");
    choice = readline.question();
  }
  if (choice === "1") return "scissors";
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

function getPlayerMove() {
  prompt(`Choose one: ${VALID_CHOICE.map(el => `[${el[0]}]${el.slice(1)}`).join(', ')}`);
  let choice = readline.question().toLowerCase();
  if (VALID_CHOICE.map(el => el[0]).includes(choice)) {
    choice = expendShortedInput(choice);
  }
  return choice;
}

while (true) {
  console.clear();
  prompt("A match for 5 wins!");
  prompt(`You won ${SCORE.you} times`);
  prompt(`Computer won ${SCORE.computer} times`);

  let choice = getPlayerMove();

  while (!VALID_CHOICE.includes(choice)) {
    prompt("That's not a valid choice");
    choice = getPlayerMove();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICE.length);
  let computerChoice = VALID_CHOICE[randomIndex];

  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  let winner = whoIsWinner(choice, computerChoice);

  if (winner === "you") {
    prompt(`${choice} ${getVerb(choice, computerChoice)} ${computerChoice}`);
  } else if (winner === "computer") {
    prompt(`${computerChoice} ${getVerb(computerChoice, choice)} ${choice}`);
  }
  displayWinner(winner);
  computeScore(winner);

  prompt(`You won ${SCORE.you} times`);
  prompt(`Computer won ${SCORE.computer} times`);

  if (SCORE.you !== 5 && SCORE.computer !== 5) {
    prompt('press any key to continue (CTRL-C to quit):');
    readline.question();
  }

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

console.clear();
prompt('Thank you for playing! Goodbye!');
