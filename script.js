// Use variables to hold and display items
// X + y = Z , X becomes Z and then inputted value equals Y then compute again
// MainDisplayValue becomes value1 after operator pressed
let value1;
let value2;
let finalValue;
let displayValue = "";
let mainDisplayValue = "";
let operator = "+";


// Operation Buttons and functions
const moduloButton = document.querySelector("#modulo");
const divisionButton = document.querySelector("#divide");
const addButton = document.querySelector("#add");
const subractButton = document.querySelector("#subtract");
const multiplyButton = document.querySelector("#multiply");
const equalButton = document.querySelector("#equals");

addButton.addEventListener("click", function() {
    if (displayValue === "") {
        console.log("Do nothing, need number input first");
    } else if (displayValue.includes("+") === false) {
        value1 = Number(mainDisplayValue);
        mainDisplayValue = "";
        displayValue += " + ";
        operator = "+";
        showBothDisplays();
    }
})

equalButton.addEventListener("click", function() {
    if (mainDisplayValue === finalValue) {
        console.log("");
    } else if (displayValue.includes(operator) === true) {
        value2 = Number(mainDisplayValue);
        finalValue = operate('+', value1, value2);
        mainDisplayValue = finalValue;
        showBothDisplays();
    } 
})

// Function for number buttons
const numButtons = document.querySelectorAll(".num-button");
numButtons.forEach(element => {
    element.addEventListener("click", function() {
        if (mainDisplayValue === finalValue){
            console.log("")
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
    } else if (operator === "/") {
        return divide(num1, num2);
    } else if (operator === "%") {
        return modulo(num1, num2);
    }
}