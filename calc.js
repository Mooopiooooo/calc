function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = ' ';
}

function deleteLastChar() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const display = document.getElementById('display');
    try {
        // Replace 'X' with '*' and evaluate the expression
        let result = eval(display.value.replace('X', '*'));
        // Optionally, handle invalid or unsafe expressions
        if (isNaN(result) || !isFinite(result)) {
            result = 'Error';
        }
        display.value = result;
    } catch (e) {
        display.value = 'Error';
    }
}