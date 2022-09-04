function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);

    switch (operator) {
        case '+':
            add(a, b);
        case '-':
            subtract(a, b);
        case '*':
            multiply(a, b);
        case '/':
            if (b === 0) return null;
            else divide (a, b);
        default:
            return null;
    }
}