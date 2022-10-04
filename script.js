// Use variables to hold and display items
// X + y = Z , X becomes Z and then inputted value equals Y then compute again
// MainDisplayValue becomes value1 after operator pressed
let value1;
let value2;
let finalValue;
let displayValue = "";
let mainDisplayValue = "";
let operator = "a";


// Operation Buttons and functions
const moduloButton = document.querySelector("#modulo");
const divisionButton = document.querySelector("#divide");
const addButton = document.querySelector("#add");
const subractButton = document.querySelector("#subtract");
const multiplyButton = document.querySelector("#multiply");
const equalButton = document.querySelector("#equals");

// Decimal Button
const decimalButton = document.querySelector("#decimal");
decimalButton.addEventListener("click", function() {
    if (mainDisplayValue.includes(".")) {
        console.log('Do nothing, already has a decimal');
    } else {
        displayValue += ".";
        mainDisplayValue += "."
        showBothDisplays();
    }
})

// Negatibve button 
const negativeButton = document.querySelector("#negative");
negativeButton.addEventListener("click", function() {
    if (displayValue === "" || displayValue === 0) {
        console.log("Doing Nothing, need a number");
    } else if (displayValue.includes(operator) === true) {
        let disIndex = displayValue.indexOf(operator);
        let remainder = displayValue.substring(0, disIndex + 2);
        let value = displayValue.substring(disIndex + 2, displayValue.length);
        value *= -1;
        displayValue = remainder + value;
        mainDisplayValue = value;
        showBothDisplays();
    } else {
        mainDisplayValue = String(mainDisplayValue * -1);
        displayValue = mainDisplayValue;
        showBothDisplays();
    }
})


// Function for operator buttons and their functionality
function operatorButtonStatements(opp) {
    if (displayValue === "") {
        console.log('Doing nothing, need a number');
    } else if (displayValue.includes(operator)) {
        console.log("Have an operator already");
    } else if (displayValue.includes("-") && operator !== "-") {
        value1Converter(opp);
    } else if (displayValue.includes(opp) === false) {
        value1Converter(opp);
    }
}

// For Getting Value1 and Operator
function value1Converter(opp) {
    value1 = Number(mainDisplayValue);
    mainDisplayValue = "";
    displayValue += ` ${opp} `;
    operator = opp;
    showBothDisplays();
}

moduloButton.addEventListener("click", function() {
    operatorButtonStatements("%");
})

divisionButton.addEventListener("click", function() {
    operatorButtonStatements("÷")
})

addButton.addEventListener("click", function() {
    operatorButtonStatements("+");
})

subractButton.addEventListener("click", function() {
    operatorButtonStatements("-");
})

multiplyButton.addEventListener("click", function() {
    operatorButtonStatements("x");
})



equalButton.addEventListener("click", function() {
    if (mainDisplayValue === finalValue) {
        console.log("");
    } else if (displayValue[0] === "-" && operator === "-") {
        var splittedValues = displayValue.split("-", 3);
        value1 = Number(splittedValues[1] * -1)
        value2 = Number(splittedValues[2]);
        console.log(splittedValues);
        finalValue = Math.round(operate(operator, value1, value2) * 100) / 100;
        mainDisplayValue = finalValue;
        showBothDisplays(); 
    } else if (displayValue.includes(operator) === true) {
        var splittedValues = displayValue.split(operator);
        value1 = Number(splittedValues[0])
        value2 = Number(splittedValues[1]);
        finalValue = Math.round(operate(operator, value1, value2) * 100) / 100;
        mainDisplayValue = finalValue;
        showBothDisplays();
    } 
})

// Clear buttons 
const clearButton = document.querySelector("#clear")
const autoClearButton = document.querySelector("#auto-clear");

function newValues() {
    if (operator === null) {
        console.log("No operator")
    } else {
        let splittedValues = displayValue.split(operator);
        value1 = splittedValues[0];
        value2 = splittedValues[1];
    }

}

clearButton.addEventListener("click", function() {
    if (displayValue[displayValue.length - 1] === " ") {
        displayValue = displayValue.substring(0, displayValue.length - 2);
        operator = "a";
        newValues();
    } else  {
        displayValue = displayValue.substring(0, displayValue.length - 1);
        newValues();
    }
    mainDisplayValue = displayValue;
    showBothDisplays();
})

autoClearButton.addEventListener("click", function() {
    displayValue = "";
    value1 = null;
    value2 = null;
    finalValue = null;
    mainDisplayValue = "";
    showBothDisplays();
})

// Function for number buttons
const numButtons = document.querySelectorAll(".num-button");
numButtons.forEach(element => {
    element.addEventListener("click", function() {
        if (mainDisplayValue === finalValue){
            console.log("Final Value achieved, clear to compute");
        } else {
            displayValue  += element.id;
            mainDisplayValue += element.id;
            showBothDisplays();
        }
    })
})


// For Displaying the values on the calculator
const upperDisplay = document.querySelector("#upper-display");
const mainDisplay = document.querySelector("#display");
function showBothDisplays() {
    upperDisplay.textContent = displayValue;
    mainDisplay.textContent = mainDisplayValue;
}

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
    } else if (operator === "÷") {
        return divide(num1, num2);
    } else if (operator === "%") {
        return modulo(num1, num2);
    }
}