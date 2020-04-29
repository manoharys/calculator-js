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
      btn.addEventListener('click', btnHit);
      div.appendChild(btn);
    }
    calculator.appendChild(div);
  }
})

function btnHit(e) {
  console.log(this.innerText);

  let btnValue = this.innerText;
  let myValue = output.innerText;

  if (myValue === "0") {
    myValue = "";
  }
  if (btnValue == '=') {
    myValue = eval(myValue);
  } else {
    let lastChar = myValue.substring(myValue.length - 1);
    if (operator.includes(btnValue)) {
      if (operator.includes(lastChar)) {
        myValue = myValue.substring(0, myValue - 1);
      } else {
        myValue = eval(myValue);
      }
    }
    myValue += btnValue;
  }
  if (btnValue == "C") {
    myValue = "0";
  }
  output.innerText = myValue;



}