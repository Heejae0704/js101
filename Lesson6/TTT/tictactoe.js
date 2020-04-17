/* eslint-disable max-lines-per-function */
const readline = require('readline-sync');

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const GAMES_TO_WIN = 5;
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7]
];
const WHO_FIRST = {match: "", game: ""};

function prompt(text) {
  console.log(`=> ${text}`);
}

function displayBoard(board) {
  console.clear();
  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);
  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => {
    return board[key] === INITIAL_MARKER;
  });
}

function joinOr(arr, delimiter = ', ', lastDelimiter = 'or ') {
  if (arr.length === 0 ) return "";
  if (arr.length === 1 ) return String(arr[0]);
  if (arr.length === 2 ) return arr[0] + lastDelimiter + arr[1];
  let string = "";
  if (arr.length > 2) {
    for (let idx = 0; idx < arr.length; idx++) {
      if (idx !== arr.length - 1) {
        string = string + arr[idx] + delimiter;
      } else {
        string = string + lastDelimiter + arr[idx];
      }
    }
  }
  return string;
}

function playerChoosesSquare(board) {
  let square = checkAndReturnValidChoice(`Choose a square (${joinOr(emptySquares(board))}):`, emptySquares(board));
  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let nextMove = getNextMove(board);
  if (nextMove === 0 && board['5'] === INITIAL_MARKER) {
    nextMove = '5';
  } else if (nextMove === 0) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    nextMove = emptySquares(board)[randomIndex];
  }

  board[nextMove] = COMPUTER_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

// eslint-disable-next-line max-lines-per-function
function detectWinner(board) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];
    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }
  return null;
}

function getNextMove(board) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let winningArr = WINNING_LINES[line];
    let zeros = winningArr.filter(key => board[key] === INITIAL_MARKER);
    if (zeros.length !== 1) continue; // no threat case for this winning line
    let computers = winningArr.filter(key => board[key] === COMPUTER_MARKER);
    if (computers.length === 2) {
      return zeros[0]; // here we put attack logic
    }
    let humans = winningArr.filter(key => board[key] === HUMAN_MARKER);
    if (humans.length === 2) { // this is threat case
      return zeros[0]; // return the square number that will prevent losing the game.
    }
  }
  return 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function checkAndReturnValidChoice(promptMessage, choiceArr) {
  let choice;
  do {
    prompt(promptMessage);
    choice = readline.question().trim()[0];
    if (choiceArr.includes(choice)) return choice;
    prompt("Sorry, that's not a valid choice");
  } while (true);
}

function askForFirst() {
  console.clear();
  let choice = checkAndReturnValidChoice('who will go first? 1: Player, 2: Computer, 3: Choose for each game', ['1', '2', '3']);
  if (choice === '1') WHO_FIRST.match = "player";
  if (choice === '2') WHO_FIRST.match = "computer";
  if (choice === '3') WHO_FIRST.match = "game";
  WHO_FIRST.game = 'match';
}

function chooseSquare(board, currentPlayer) {
  if (currentPlayer === 'player') {
    playerChoosesSquare(board);
  } else {
    computerChoosesSquare(board);
  }
}

// function alternatePlayer(currentPlayer) {
//   if (currentPlayer === 'player') return 'computer';
//   return 'player';
// }

// eslint-disable-next-line max-statements
function handleTurns(board, playerWinCount, computerWinCount) {
  while (true) {
    displayBoard(board);
    prompt(`Match Score`);
    prompt(`Player: ${playerWinCount} || Computer: ${computerWinCount}`);

    if (WHO_FIRST.match === 'player' || WHO_FIRST.game === 'player') {
      chooseSquare(board, 'player');
      if (someoneWon(board) || boardFull(board)) break;
      chooseSquare(board, 'computer');
      if (someoneWon(board) || boardFull(board)) break;
    } else if (WHO_FIRST.match === 'computer' || WHO_FIRST.game === 'computer') {
      chooseSquare(board, 'computer');
      if (someoneWon(board) || boardFull(board)) break;
      displayBoard(board);
      prompt(`Match Score`);
      prompt(`Player: ${playerWinCount} || Computer: ${computerWinCount}`);
      chooseSquare(board, 'player');
      if (someoneWon(board) || boardFull(board)) break;
    }
  }
}

while (true) {
  let playerWinCount = 0;
  let computerWinCount = 0;
  WHO_FIRST.match = "";
  WHO_FIRST.game = "";
  askForFirst();

  while (true) {
    let board = initializeBoard();
    if (WHO_FIRST.match === "game") {
      let game = checkAndReturnValidChoice('who will go first for this game: 1: Player, 2: Computer', ['1', '2', '3']);
      if (game === '1') WHO_FIRST.game = "player";
      if (game === '2') WHO_FIRST.game = "computer";
    }
    handleTurns(board, playerWinCount, computerWinCount);
    displayBoard(board);

    if (someoneWon(board)) {
      prompt(`${detectWinner(board)} won!`);
      if (detectWinner(board) === 'Player') {
        playerWinCount++;
      } else computerWinCount++;
    } else {
      prompt("It's a tie!");
    }

    prompt('Press any key to continue: ');
    readline.question();

    if (playerWinCount === GAMES_TO_WIN || computerWinCount === GAMES_TO_WIN) {
      prompt(`Match Score`);
      prompt(`Player: ${playerWinCount} || Computer: ${computerWinCount}`);
      prompt(`${detectWinner(board)} won the match!`);
      break;
    }
  }
  const answer = checkAndReturnValidChoice('Play again? (y or n)', ['y', 'Y', 'n', 'N']).toLowerCase();
  if (answer !== 'y') break;
}

prompt('Thanks for playing Tic Tac Toe!');