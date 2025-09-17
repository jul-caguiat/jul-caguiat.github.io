
var decButton = document.getElementById("decimal");
var allClearButton = document.getElementById("all-clear");
var clearButton = document.getElementById("clear");
var displayInputValue = document.getElementById("display-value");

var numButtons = document.getElementsByClassName("num-button");
var operButtons = document.getElementsByClassName("oper-button");

var displayValue = "0";
var inputHolder;
var inputArray = [];

var inputValueDisp = (clickObj) => {
    var inputValue = clickObj.target.innerText;
    
    if (displayValue != '+' ) 
        displayValue = '';         
        displayValue += inputValue;    
        displayInputValue.innerText = displayValue;   
}

for (let i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener('click', inputValueDisp, false);
}

var calculateFunction = (clickObj) => {
    var operatorInput = clickObj.target.innerText;

    if(operatorInput == '+') {
        inputHolder = displayValue;
        displayValue = operatorInput;
        displayInputValue.innerText = displayValue;
        inputArray.push(inputHolder);
        inputArray.push('+');
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
        displayValue = calculation + " ";
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