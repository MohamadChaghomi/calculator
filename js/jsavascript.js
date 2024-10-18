let currentInput = '';
let previousInput = '';
let operator = '';
const output = document.getElementById('calculatorOutput');
function addToOutput(value) {
    currentInput += value;
    output.value = currentInput;
}
function setOperator(op) {
    if (currentInput === '') 
        return;
    previousInput = currentInput;
    currentInput = '';
    operator = op;
}
function calculate() {
    let result;
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);
    if (!operator || isNaN(num1) || (operator !== '%' && isNaN(num2))) {
        output.value = 'Error';
        return;
    }
        switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '×':
            result = num1 * num2;
            break;
        case '÷':
            if (num2 === 0) {
                output.value = 'Error';
                return;
            }
            result = num1 / num2;
            break;
        case '%':
            result = num1 / 100;
            break;
        default:
            return;
    }
    output.value = formatNumber(result);
    previousInput = result;
    currentInput = '';
    operator = '';
    hasDot = false;
    isResultDisplayed = true;
}
function clearOutput() {
    currentInput = '';
    previousInput = '';
    operator = '';
    output.value = '';
}

function toggleSign() {
    if (currentInput) {
        currentInput = (parseFloat(currentInput) * -1).toString();
        output.value = currentInput;
    }
}

function removeLastDigit() {
    if (currentInput === '') 
        return;
    currentInput = currentInput.slice(0, -1);
    output.value = currentInput;
}

function addDecimal() {
    if (currentInput === '') {
        currentInput = '0';
    }
    if (!currentInput.includes('.')) {
        currentInput += '.';
        output.value = currentInput;
    }
}

function formatNumber(num) {
    return Number(num).toLocaleString('en');
}