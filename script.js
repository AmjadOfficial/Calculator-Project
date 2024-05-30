const display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstOperand = '';

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.innerText;

    switch(value) {
      case 'C':
        currentInput = '';
        operator = '';
        firstOperand = '';
        display.innerText = '0';
        break;
      case '=':
        if (operator && firstOperand !== '') {
          currentInput = eval(firstOperand + operator + currentInput);
          display.innerText = currentInput;
          operator = '';
          firstOperand = '';
        }
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        operator = value;
        firstOperand = currentInput;
        currentInput = '';
        break;
      default:
        currentInput += value;
        display.innerText = currentInput;
    }
  });
});
