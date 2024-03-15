function add(num1, num2){
    return num1 + num2;
}

function subtract(minuend,subtrahend){
    return minuend - subtrahend;
}

function multiply(num1, num2){
    return num1*num2;
}

function divide(dividend, divisor){
    return dividend/divisor;
}

function exponent(base,exponent){
    return base**exponent;
}

const numberSelection = document.querySelector(".numbers");
const operationSelection = document.querySelector(".operations");
const display = document.querySelector(".display");

let firstNumber = "";
let secondNumber = "";
let operation = "";
let result = "";


let firstNumberEventListenerSwitch = true;
function createFirstNumber(event){
    if(firstNumberEventListenerSwitch){
        firstNumber += event.target.textContent
        display.textContent = firstNumber;
    };
}
numberSelection.addEventListener(("click"),createFirstNumber)





operationSelection.addEventListener("click", (event)=>{
    operation = event.target.textContent;
    if (operation != "Clear" && operation != "="){
        firstNumberEventListenerSwitch = false;
        secondNumberEventListenerSwitch = true;
        display.textContent = operation;
    }
    else if(operation === "="){
    }
    else{
        firstNumber = "";
        secondNumber = "";
        operation = "";
        result = "";
        display.textContent = "";
        firstNumberEventListenerSwitch = true;
        secondNumberEventListenerSwitch = false;
    }
})


let secondNumberEventListenerSwitch = false;
function createSecondNumber(event){
    if(secondNumberEventListenerSwitch){
        secondNumber += event.target.textContent
        display.textContent = secondNumber;
    };
}
numberSelection.addEventListener(("click"), createSecondNumber);



document.querySelector(".operations").addEventListener(("click"), evaluate);


function evaluate(event) {
   if(firstNumber != "" && secondNumber!= ""){
         if(event.target.textContent == "="){
            checkOperation();
            firstNumberEventListenerSwitch = true;
            secondNumberEventListenerSwitch = false;
            event.stopPropagation();
        }
        else{
            checkOperation();
            firstNumberEventListenerSwitch = false;
            secondNumberEventListenerSwitch = true;
        }
   } 
}


function checkOperation(operation){
switch(operation){
    case "+":
        result = add(+firstNumber,+secondNumber);
        firstNumber = result;
        secondNumber = "";
    break;
    case "-":
        result = subtract(+firstNumber,+secondNumber);
        firstNumber = result;
        secondNumber = "";
    break;
    case "*":
        result = multiply(+firstNumber,+secondNumber);
        firstNumber = result;
        secondNumber = "";
    break;
    case "/":
        result = divide(+firstNumber,+secondNumber);
        firstNumber = result;
        secondNumber = "";
    break;
    case "^":
        result = exponent(+firstNumber,+secondNumber);
        firstNumber = result;
        secondNumber = "";
    break;
}
display.textContent = result;
}