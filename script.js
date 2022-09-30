// Display Functions
let displayValue = "";
let upperDisplayValue = "";
const autoClear = document.querySelector("#auto-clear");
const clearOne = document.querySelector("#clear");
const display = document.querySelector("#display");
const upperDisplay = document.querySelector("#upper-display");

// When button is touched, value is displayed
const numButtons = document.querySelectorAll(".num-button");
numButtons.forEach(element => {
    element.addEventListener("click", function() {
        displayValue += element.id;
        showDisplayValue(displayValue);
    })
});

//function to show display value
function showDisplayValue(value) {
    display.textContent = value;
}

function showUpperDisplayValue(value) {
    upperDisplay.textContent = value;
}

//functions to clear display value and all values
clearOne.addEventListener("click", function() {
    displayValue = "";
    showDisplayValue(displayValue);
})

autoClear.addEventListener("click", function() {
    displayValue = "";
    upperDisplayValue = "";
    showDisplayValue(displayValue);
    showUpperDisplayValue(upperDisplayValue);
})

// Operations
function add(num1, num2) {
    return Number(num1) + Number(num2);
}

function subtract(num1, num2) {
    return Number(num1) - Number(num2);
}

function multiply(num1, num2) {
    return Number(num1) * Number(num2);
}

function divide(num1, num2) {
    return Number(num1) / Number(num2);
}

// Operate Function 
function operate(operator, num1, num2) {
    if (operator === '+') {
        return add(num1, num2);
    } else if (operator === "-") {
        return subtract(num1, num2);
    } else if (operator === "*") {
        return multiply(num1, num2);
    } else if (operator === "/") {
        return divide(num1, num2);
    }
}