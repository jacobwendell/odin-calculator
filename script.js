// Use variables to hold and display items
// X + y = Z , X becomes Z and then inputted value equals Y then compute again
// MainDisplayValue becomes value1 after operator pressed
let value1;
let value2;
let finalValue;
let displayValue = "";
let mainDisplayValue = "";
let operator;


// Operation Buttons and functions
const moduloButton = document.querySelector("#modulo");
const divisionButton = document.querySelector("#divide");
const addButton = document.querySelector("#add");
const subractButton = document.querySelector("#subtract");
const multiplyButton = document.querySelector("#multiply");
const equalButton = document.querySelector("#equals");

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
    } else if (displayValue.includes(operator) === true) {
        value2 = Number(mainDisplayValue);
        finalValue = operate(operator, value1, value2);
        mainDisplayValue = finalValue;
        showBothDisplays();
    } 
})

// Clear buttons 
const clearButton = document.querySelector("#clear")
const autoClearButton = document.querySelector("#auto-clear");

clearButton.addEventListener("click", function() {
    if (displayValue[displayValue.length - 1] === " ") {
        displayValue = displayValue.substring(0, displayValue.length - 2);
    } else  {
        displayValue = displayValue.substring(0, displayValue.length - 1);
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