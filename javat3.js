// script.js

document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    const clearButton = document.getElementById('clear');
    const equalButton = document.getElementById('equal');

    let currentInput = '';
    let operator = '';
    let previousInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.getAttribute('data-value');

            if (['+', '-', '*', '/'].includes(value)) {
                if (currentInput !== '') {
                    operator = value;
                    previousInput = currentInput;
                    currentInput = '';
                }
            } else {
                currentInput += value;
            }
            display.textContent = currentInput || previousInput;
        });
    });

    clearButton.addEventListener('click', function() {
        currentInput = '';
        previousInput = '';
        operator = '';
        display.textContent = '0';
    });

    equalButton.addEventListener('click', function() {
        if (currentInput && previousInput && operator) {
            const result = calculate(parseFloat(previousInput), parseFloat(currentInput), operator);
            display.textContent = result;
            previousInput = result;
            currentInput = '';
            operator = '';
        }
    });

    function calculate(num1, num2, operator) {
        switch (operator) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                return num1 / num2;
            default:
                return 0;
        }
    }
});
