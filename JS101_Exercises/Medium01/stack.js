/* eslint-disable max-lines-per-function */
function minilang(str) {
  const stack = [];
  let register = 0;
  const strArr = str.split(" ");
  strArr.forEach(command => {
    if (!isNaN(Number(command))) {
      register = Number(command);
    }
    let popedValue;
    if (["ADD", "SUB", "MULT", "DIV", "MOD", "POP"].includes(command)) {
      popedValue = stack.pop();
    }
    switch (command) {
      case "PUSH":
        stack.push(register);
        break;
      case "ADD":
        register += popedValue;
        break;
      case "SUB":
        register -= popedValue;
        break;
      case "MULT":
        register *= popedValue;
        break;
      case "DIV":
        register = Math.floor(register / popedValue);
        break;
      case "MOD":
        register = Math.floor(register % popedValue);
        break;
      case "POP":
        register = popedValue;
        break;
        case "PRINT":
        console.log(register);
        break;
      default:
        break;
    }
  });
}

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)