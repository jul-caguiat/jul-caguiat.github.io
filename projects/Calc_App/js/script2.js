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

var inputValueDisp = (clickObj) => {                            // displays input values
    var inputValue = clickObj.target.innerText;
    console.log(inputValue);
    console.log(displayValue);
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
    else if (displayValue === '.') {
        displayValue += inputValue;
        displayInputValue.innerText = displayValue;
    }
    else {
        displayValue += inputValue;
        displayInputValue.innerText = displayValue;
    }
}    

for (let i = 0; i < numButtons.length; i++) {                  // calls inputValueDisp function 
    numButtons[i].addEventListener('click', inputValueDisp, false); 
}

calculateFunction = (clickObj) => {
    var operatorInput = clickObj.target.innerText;

    if(operatorInput == '+') {
        inputHolder = displayValue;
        displayValue = operatorInput;
        displayInputValue.innerText = displayValue;
        inputArray.push(inputHolder);
        inputArray.push('+');
        console.log(inputArray);
    }
    else if(operatorInput == '-') {
        inputHolder = displayValue;
        displayValue = operatorInput;
        displayInputValue.innerText = displayValue;
        inputArray.push(inputHolder);
        inputArray.push('-');
    }
    else if(operatorInput == 'x') {
        inputHolder = displayValue;
        displayValue = operatorInput;
        displayInputValue.innerText = displayValue;
        inputArray.push(inputHolder);
        inputArray.push('*');
    }
    else if(operatorInput == '/') {
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

for (let i = 0; i < operButtons.length; i++) {
    operButtons[i].addEventListener('click', calculateFunction, false);
} 

allClearButton.onclick = () => {
    displayValue = '0';
    inputHold = undefined;
    inputArray = [];
    displayInputValue.innerHTML = displayValue;
}

clearButton.onclick = () => {
    var displayLength = displayValue.length;
    displayValue = displayValue.slice(0, displayLength - 1);   
    displayInputValue.innerHTML = displayValue; 

    if (displayValue === '')
        displayValue = "0";

    displayInputValue.innerHTML = displayValue;     
}

decButton.onclick = () => {
    if(!displayValue.includes('.'))
        displayValue += '.';

    displayInputValue.innerHTML = displayValue;     
}