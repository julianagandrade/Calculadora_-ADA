let display = document.getElementById('display');
let currentInput = '';
let result = 0;
let shouldResetDisplay = false;

function appendNumber(number) {
    if (shouldResetDisplay) {
        display.innerText = '';
        shouldResetDisplay = false;
    }

    if (display.innerText === '0' && number !== '.') {
        display.innerText = '';
    }

    display.innerText += number;
    currentInput = display.innerText;
}

function clearDisplay() {
    display.innerText = '0';
    currentInput = '';
    result = 0;
}

function deleteLast() {
    display.innerText = display.innerText.slice(0, -1);
    if (display.innerText === '') {
        display.innerText = '0';
    }
}

function calculate() {
    try {
        display.innerText = eval(display.innerText);
        shouldResetDisplay = true;
    } catch (error) {
        display.innerText = 'Erro';
        shouldResetDisplay = true;
    }
}
