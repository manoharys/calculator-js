const calculator = document.querySelector('.myCalc');
const keys = [["1","2","3","+"],["4","5","6","-"],["7","8","9","*"],["C","0","=","/"]];
const operator = ["+","-","*","/"];

//Global variables
let output;

document.addEventListener('DOMContentLoaded',() =>{
  output = document.createElement('div');
  output.innerHTML = "0";
  output.classList.add('output');
  calculator.appendChild(output);   
})