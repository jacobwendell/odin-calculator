// Comments for me to remmeber what to do tomorrow
// Sixth: Begin to style
// Goal is to push this foward tomorrow

// Bug - Negatie numbers not working, minus sign same as negative

// Display Variables
const operators = ["÷", "+", "-", "x", "%"];
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
const subtractButton = document.querySelector("#subtraction");
const multiplyButton = document.querySelector("#multiplication");
const equalButton = document.querySelector("#equals");
const decimalButton = document.querySelector("#decimal");

// Decimal button pressed
decimalButton.addEventListener("click", function() {
    var splitValues = upperDisplayValue.split(" ");
    if (upperDisplayValue.includes(".") === false) {
        upperDisplayValue += ".";
        showUpperDisplayValue(upperDisplayValue);
    } else if (splitValues[2].includes(".") === false) {
        upperDisplayValue += ".";
        showUpperDisplayValue(upperDisplayValue);
    }
})
// When pressing operator button
function equalFunction() {
    if (upperDisplayValue.includes("+")) {
        var newValue = upperDisplayValue.split(" + ");
        return Math.round(operate("+", newValue[0], newValue[1]) * 100) / 100;
    } else if (upperDisplayValue.includes("÷")) {
        var newValue = upperDisplayValue.split(" ÷ ");
        return Math.round(operate("/", newValue[0], newValue[1]) * 100) / 100;
    } else if (upperDisplayValue.includes("x")) {
        var newValue = upperDisplayValue.split(" x ");
        return Math.round(operate("*", newValue[0], newValue[1]) * 100) / 100;
    } else if (upperDisplayValue.includes("%")) {
        var newValue = upperDisplayValue.split(" % ");
        return Math.round(operate("%", newValue[0], newValue[1]) * 100) / 100;
    }  else if (upperDisplayValue.includes("-")) {
        var newValue = upperDisplayValue.split(" - ");
        return Math.round(operate("-", newValue[0], newValue[1]) * 100) / 100;
    }
}

function checkIfOperator() {
    if (upperDisplayValue.includes("÷") === true) {
        displayValue = equalFunction();
        showDisplayValue(displayValue);
    } else if (upperDisplayValue.includes("+") === true) {
        displayValue = equalFunction();
        showDisplayValue(displayValue);
    } else if (upperDisplayValue.includes("-") === true) {
        displayValue = equalFunction();
        showDisplayValue(displayValue);
    } else if (upperDisplayValue.includes("x") === true) {
        displayValue = equalFunction();
        showDisplayValue(displayValue);
    } else if (upperDisplayValue.includes("%") === true) {
        displayValue = equalFunction();
        showDisplayValue(displayValue);
    } else {
        displayValue = upperDisplayValue;
        showDisplayValue(displayValue);
    }
}   

function presentingNumber() {
    checkIfOperator();
    if (displayValue === 0){
        upperDisplayValue = "";
        showUpperDisplayValue(upperDisplayValue);
    } else {
        upperDisplayValue = displayValue.toString();
        showUpperDisplayValue(upperDisplayValue);
    }
}

function replacingOperator(operator) {
    if (upperDisplayValue.includes("÷")) {
        upperDisplayValue.replace("÷", operator);
    } else if (upperDisplayValue.includes("+")) {
        upperDisplayValue.replace("+", operator);
    } else if (upperDisplayValue.includes("-")) {
        upperDisplayValue.replace("-", operator);
    } else if (upperDisplayValue.includes("x")) {
        upperDisplayValue.replace("x", operator)
    } else if (upperDisplayValue.includes("%")) {
        upperDisplayValue.replace("%", operator);
    }
}

function getNumberValues(operator) {
    if (upperDisplayValue.includes(operator)) {
        presentingNumber();
        upperDisplayValue += ` ${operator} `;
        showUpperDisplayValue(upperDisplayValue);
    } else if (upperDisplayValue.includes(operators[0])) {
            replacingOperator(operator);
    } else if (upperDisplayValue.includes(operators[1])) {
        replacingOperator(operator);
    } else if (upperDisplayValue.includes(operators[2])) {
        replacingOperator(operator);
    } else if (upperDisplayValue.includes(operators[3])) {
        replacingOperator(operator);
    } else if (upperDisplayValue.includes(operators[4])) {
        replacingOperator(operator);
    } else {
        displayValue = "";
        showDisplayValue(displayValue);
        upperDisplayValue += ` ${operator} `;
        showUpperDisplayValue(upperDisplayValue);
    }
}

function operatorButtonFunction(operator) {
    if (upperDisplayValue === "Infinity") {
        upperDisplayValue = "";
        showUpperDisplayValue(upperDisplayValue);
    } else if (upperDisplayValue === "") {
        upperDisplayValue = "0";
        getNumberValues(operator);
    } else {
        getNumberValues(operator);
    }
}
//Operation Buttons
divideButton.addEventListener("click", function() {
    operatorButtonFunction("÷")
})

addButton.addEventListener("click", function() {
    operatorButtonFunction("+");
})

subtractButton.addEventListener("click", function() {
    operatorButtonFunction("-");
})

multiplyButton.addEventListener("click", function() {
    operatorButtonFunction("x");
})

moduloButton.addEventListener("click", function() {
    operatorButtonFunction("%");
})

// When equal is pressed
equalButton.addEventListener("click", function() {
    if (upperDisplayValue === "") {
        console.log("Doing nothing because equal equals nothing");
    } else if (upperDisplayValue === "Infinity") {
        upperDisplayValue = "";
        showUpperDisplayValue(upperDisplayValue);
    } else {
        presentingNumber();
    }
});

// When button is touched, value is displayed
const numButtons = document.querySelectorAll(".num-button");
numButtons.forEach(element => {
    element.addEventListener("click", function() {
        if (upperDisplayValue === "Infinity") {
            upperDisplayValue = "";
        } else if (upperDisplayValue === "NaN") {
            upperDisplayValue = "";
        }
        upperDisplayValue += element.id;
        showUpperDisplayValue(upperDisplayValue);
        displayValue = "";
        showDisplayValue(displayValue);
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
    if (upperDisplayValue === "Infinity") {
        upperDisplayValue = "";
    }
    if (upperDisplayValue[upperDisplayValue.length - 1] === " ") {
        var replacedValue = upperDisplayValue.slice(0, upperDisplayValue.length - 3)
        upperDisplayValue = replacedValue;
        showUpperDisplayValue(upperDisplayValue);
    } else {
        var replacedValue = upperDisplayValue.slice(0, upperDisplayValue.length -1 );
        upperDisplayValue = replacedValue;
        showUpperDisplayValue(upperDisplayValue);
    }
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