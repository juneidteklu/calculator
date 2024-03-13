/* 
Maybe I can store all of the below function into their own objects and when its time to 
calculate the two selected numbers, we can call the methods of the necessary object
 */
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

function square(base,exponent){
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
     firstNumberEventListenerSwitch = false;
     secondNumberEventListenerSwitch = true;
     display.textContent = operation;
})


let secondNumberEventListenerSwitch = false;
function createSecondNumber(event){
    if(secondNumberEventListenerSwitch){
        secondNumber += event.target.textContent
        display.textContent = secondNumber;
    };
}
numberSelection.addEventListener(("click"), createSecondNumber);



document.querySelector(".equal").addEventListener(("click"), (event) => {
    firstNumberEventListenerSwitch = true;
    secondNumberEventListenerSwitch = false;

    /* 
    Perform correct operation. Display the result and set the secondNumber
    to the result value. Reset firstNumber to empty string and use the firstNumber
    for the next operation
    */
   switch(operation){
        case "+":
            result = add(+firstNumber,+secondNumber);
        break;
   }
   display.textContent = result;

    event.stopPropagation();
})









