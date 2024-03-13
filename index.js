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

let firstNumber = "";
let secondNumber = "";
let operation = "";
numberSelection.addEventListener(("click"), (event)=> {
    firstNumber += event.target.textContent;
})

operationSelection.addEventListener("click", (event)=>{
     operation = event.target.textContent;
    console.log(operation);
})



