const mesObj = {
  en: {
    welcome: "Welcome to Car Loan Calculator!",
    loanAmount: "Please enter the loan amount in $:",
    apr: "Enter the annual interest rate (APR) in % (e.g. enter 5 if 5%):",
    loanYear: "Enter the loan duration in years:",
    numError: "Please enter valid positive number.",
    monthlyPayment: "Your monthly payment is estimated to be:",
    cont: "Do you want to try again? (Yes/No)",
    contError: "Tell me yes or no..."
  },
  ko: {
    welcome: "환영합니다. 계산기 프로그램입니다.",
    firstNum: "첫번째 숫자를 입력하세요:",
    NumError: "숫자가 아닌 것 같네요.",
    secondNum: "두번째 숫자를 입력하세요",
    operation: "어떤 계산을 하시겠어요?\n1) 더하기 2) 빼기 3) 곱하기  4) 나누기",
    add: "더하기를 합니다.",
    subtract: "빼기를 합니다.",
    multiply: "곱하기를 합니다.",
    divide: "나누기를 합니다.",
    result: "결과: ",
    cont: "다시 하시겠습니까? (Yes/No)",
    contError: "Yes 또는 No로 대답해주세요..."
  }
};

module.exports = mesObj;
