// CMSC 207 Assignment1: script file (Julfri Emmil Caguiat) 

var numButtons = document.getElementsByClassName("num-button");
var operButtons = document.getElementsByClassName("oper-button");

var decButton = document.getElementById("decimal");
var allClearButton = document.getElementById("all-clear");
var clearButton = document.getElementById("clear");
var displayInputValue = document.getElementById("display");

var displayValue = "0";
var inputHolder;
var inputArray = [];

 // displays input values function
var inputValueDisp = (clickObj) => {                           
    var inputValue = clickObj.target.innerText;
    if (displayValue === '0') {
        displayValue = '';
        displayValue += inputValue;
        displayInputValue.innerText = displayValue;
    }
    else if (displayValue === '+' || displayValue === '-' || displayValue === 'x' || displayValue === '/') {
        displayValue = '';
        displayValue += inputValue;
        displayInputValue.innerText = displayValue;
    }    
    else {
        displayValue += inputValue;
        displayInputValue.innerText = displayValue;
    } 
}    

// calls inputValueDisp function on click event
for (let i = 0; i < numButtons.length; i++) {                   
    numButtons[i].addEventListener('click', inputValueDisp, false); 
}

// calculates inputs function
calculateFunction = (clickObj) => {
    var operatorInput = clickObj.target.innerText;

    if(operatorInput == '+' && displayValue != '0') {
        inputHolder = displayValue;
        displayValue = operatorInput;
        displayInputValue.innerText = displayValue;
        inputArray.push(inputHolder);
        inputArray.push('+');
    }
    else if(operatorInput == '-' && displayValue != '0') {
        inputHolder = displayValue;
        displayValue = operatorInput;
        displayInputValue.innerText = displayValue;
        inputArray.push(inputHolder);
        inputArray.push('-');
    }
    else if(operatorInput == 'x' && displayValue != '0') {
        inputHolder = displayValue;
        displayValue = operatorInput;
        displayInputValue.innerText = displayValue;
        inputArray.push(inputHolder);
        inputArray.push('*');
    }
    else if(operatorInput == '/' && displayValue != '0') {
        inputHolder = displayValue;
        displayValue = operatorInput;
        displayInputValue.innerText = displayValue;
        inputArray.push(inputHolder);
        inputArray.push('/');
    }
    else if(operatorInput == '=') {        
        inputArray.push(displayValue);
        var calculation = eval(inputArray.join(' '));
        displayValue = calculation + "";
        displayInputValue.innerText = displayValue;
        inputArray = [];
    }
}

// calls calculateFunction on click event
for (let i = 0; i < operButtons.length; i++) {
    operButtons[i].addEventListener('click', calculateFunction, false);
} 

// clears all dislay when AC button is click 
allClearButton.onclick = () => {
    displayValue = '0';
    inputHold = undefined;
    inputArray = [];
    displayInputValue.innerHTML = displayValue;
}

// backspace when C button is click 
clearButton.onclick = () => {
    var displayLength = displayValue.length;
    displayValue = displayValue.slice(0, displayLength - 1);   
    displayInputValue.innerHTML = displayValue; 

    if (displayValue === '')
        displayValue = "0";

    displayInputValue.innerHTML = displayValue;     
}

// displays decimal "." when button is click
decButton.onclick = () => {
    if(!displayValue.includes('.'))
        if (displayValue === '+' || displayValue === '-' || displayValue === 'x' || displayValue === '/') {
            displayValue = '0.';
        }
        else {
            displayValue += '.';
        }

    displayInputValue.innerHTML = displayValue;     
}