// Comments for me to remmeber what to do tomorrow
// First: Look at Add button adn refactor to useable code for other buttons
// Second: Fix equal function to have more cases
// Third: Fix equal button type error due to toString Method
// Fourth: Continue with project, after button functionality not much more to do
// Fifth, add the decimal button to work
// Sixth: Begin to style
// Seven: Check edge cases and any bugs.  Probably should be Sixth
// Goal is to push this foward tomorrow

// Display Variables
let displayValue = "";
let upperDisplayValue = "";
const autoClear = document.querySelector("#auto-clear");
const clearOne = document.querySelector("#clear");
const display = document.querySelector("#display");
const upperDisplay = document.querySelector("#upper-display");

// When Operator Button is touched
const moduloButton  = document.querySelector("#modulo");
const divideButton = document.querySelector("#divide");
const addButton = document.querySelector("#addition");
const subtractButton = document.querySelector("#ubtraction");
const multiplyButton = document.querySelector("#multiplication");
const equalButton = document.querySelector("#equals");


// When pressing operator button
function equalFunction() {
    if (upperDisplayValue.includes("+")) {
        var newValue = upperDisplayValue.split(" + ");
        return operate("+", newValue[0], newValue[1]);
    } 
}

function presentingNumber() {
    displayValue = equalFunction();
    console.log(displayValue);
    showDisplayValue(displayValue);
    upperDisplayValue = displayValue.toString();
    showUpperDisplayValue(upperDisplayValue);
}

addButton.addEventListener("click", function() {
    if (upperDisplayValue.includes("+") === true) {
        presentingNumber();
    } else {
        displayValue = "";
        showDisplayValue();
        upperDisplayValue += " + ";
        showUpperDisplayValue(upperDisplayValue);
    }
})

// When equal is pressed
equalButton.addEventListener("click", function() {
    presentingNumber();
});

// When button is touched, value is displayed
const numButtons = document.querySelectorAll(".num-button");
numButtons.forEach(element => {
    element.addEventListener("click", function() {
        upperDisplayValue += element.id;
        showUpperDisplayValue(upperDisplayValue);
    })
});

// function to show display value
function showDisplayValue(value) {
    display.textContent = value;
}

function showUpperDisplayValue(value) {
    upperDisplay.textContent = value;
}

// functions to clear display value and all values
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

function modulo(num1, num2) {
    return Number(num1) % Number(num2);
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
    } else if (operator === "%") {
        return modulo(num1, num2);
    }
}