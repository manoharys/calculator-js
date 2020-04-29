const calculator = document.querySelector('.myCalc');
const keys = [
  ["1", "2", "3", "+"],
  ["4", "5", "6", "-"],
  ["7", "8", "9", "*"],
  ["C", "0", "=", "/"]
];
const operator = ["+", "-", "*", "/"];

//Global variables
let output;

document.addEventListener('DOMContentLoaded', () => {
  output = document.createElement('div');
  output.innerHTML = "0";
  output.classList.add('output');
  calculator.appendChild(output);
  //keys
  for (let i = 0; i < keys.length; i++) {
    let div = document.createElement('div');
    div.classList.add('row');
    for (let j = 0; j < keys[i].length; j++) {
      let btn = document.createElement('div');
      btn.innerHTML = keys[i][j];
      btn.classList.add('btn')
      div.appendChild(btn);
    }
    calculator.appendChild(div);
  }


})