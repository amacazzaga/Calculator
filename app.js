const buttonCero = document.getElementById("0");
const buttonOne = document.getElementById("1");
const buttonTwo = document.getElementById("2");
const buttonThree = document.getElementById("3");
const buttonFour = document.getElementById("4");
const buttonFive = document.getElementById("5");
const buttonSix = document.getElementById("6");
const buttonSeven = document.getElementById("7");
const buttonEight = document.getElementById("8");
const buttonNine = document.getElementById("9");
const buttonClear = document.getElementById("clear");
const buttonSum = document.getElementById("+");
const buttonSubstraction = document.getElementById("-");
const buttonMultiplication = document.getElementById("*");
const buttonDivision = document.getElementById("/");
const buttonComa = document.getElementById(".");
const buttonResult = document.getElementById("result");
const visor = document.getElementById("visor");
let turn = "left";
let toNumberLeft = undefined;
let toNumberRight = undefined;
let arrOfNumbersOnVisor = [];
let arrOfNumbersOnVisorB = [];
let result = 0;
const arrOfButtonNumbers = [
  (button0 = {
    boton: buttonCero,
    value: 0,
  }),
  (button1 = {
    boton: buttonOne,
    value: 1,
  }),
  (button2 = {
    boton: buttonTwo,
    value: 2,
  }),
  (button3 = {
    boton: buttonThree,
    value: 3,
  }),
  (button4 = {
    boton: buttonFour,
    value: 4,
  }),
  (button5 = {
    boton: buttonFive,
    value: 5,
  }),
  (button6 = {
    boton: buttonSix,
    value: 6,
  }),
  (button7 = {
    boton: buttonSeven,
    value: 7,
  }),
  (button8 = {
    boton: buttonEight,
    value: 8,
  }),
  (button9 = {
    boton: buttonNine,
    value: 9,
  }),
  (coma = {
    boton: buttonComa,
    value: buttonComa.id,
  }),
];
const arrOfSymbol = [
  buttonSum,
  buttonSubstraction,
  buttonMultiplication,
  buttonDivision,
];
//////////////////////////////////////////////////////
function visorInfo() {
  arrOfButtonNumbers.map((el) => {
    const buttonClicked = el.boton;
    const valueOfButtonClicked = el.value;
    buttonClicked.addEventListener("click", () => {
      if (turn === "right") {
        arrOfNumbersOnVisorB.push(valueOfButtonClicked);
        toNumberRight = Number(arrOfNumbersOnVisorB.join(""));
        visor.innerText = toNumberRight;
        console.log(toNumberRight);
      } else if (turn === "left") {
        arrOfNumbersOnVisor.push(valueOfButtonClicked);
        toNumberLeft = Number(arrOfNumbersOnVisor.join(""));
        visor.innerText = toNumberLeft;
        console.log(toNumberLeft);
      }
    });
  });
}
///////////////////////////////////////////////////////
function sum() {
  buttonSum.addEventListener("click", () => {
    turn = "right";
    console.log(turn);
    buttonResult.addEventListener("click", () => {
      let result = toNumberLeft + toNumberRight;
      toNumberLeft = result;
      arrOfNumbersOnVisorB = [];
      toNumberRight = 0;
      console.log(result);
    });
  });
}
//////////////////////////////////////////////////////
function clearVisor() {
  buttonClear.addEventListener("click", () => {
    arrOfNumbersOnVisor = [];
    arrOfNumbersOnVisorB = [];
    toNumberLeft = undefined;
    toNumberRight = undefined;
    visor.innerText = " ";
    turn = "left";
    console.log(toNumberLeft);
    console.log(toNumberRight);
  });
}
visorInfo(arrOfNumbersOnVisor, arrOfButtonNumbers);
clearVisor();
sum();
