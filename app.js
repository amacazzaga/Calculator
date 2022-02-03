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
let visor = document.getElementById("visor");
let toNumberLeft = 0;
let toNumberRight = 0;
let arrOfNumbersOnVisor = [];
let arrOfNumbersOnVisorB = [];
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

////////////////////////////////////////////////////////
function clearVisor() {
  buttonClear.addEventListener("click", () => {
    arrOfNumbersOnVisor = [];
    arrOfNumbersOnVisorB = [];
    visor.innerText = " ";
  });
}
clearVisor(buttonClear);
//////////////////////////////////////////////////////
function visorInfo() {
  arrOfButtonNumbers.map((el) => {
    // revisar el tema del elemento padre esperando un event
    const buttonClicked = el.boton;
    const valueOfButtonClicked = el.value;
    buttonClicked.addEventListener("click", () => {
      arrOfNumbersOnVisor.push(valueOfButtonClicked);
      toNumberLeft = Number(arrOfNumbersOnVisor.join(""));
      visor.innerText = toNumberLeft;
    });
  });
}
visorInfo(arrOfNumbersOnVisor, arrOfButtonNumbers);
///////////////////////////////////////////////////////

function sum() {
  buttonSum.addEventListener("click", () => {
    let a = toNumberLeft;
    let b;

    arrOfButtonNumbers.map((el) => {
      // revisar el tema del elemento padre esperando un event
      const buttonClickedB = el.boton;
      const valueOfButtonClickedB = el.value;
      buttonClickedB.addEventListener("click", () => {
        arrOfNumbersOnVisorB.push(valueOfButtonClickedB);
        toNumberRight = Number(arrOfNumbersOnVisorB.join(""));
        b = toNumberRight;
        console.log(toNumberRight);
        console.log(b);
      });
    });

    buttonResult.addEventListener("click", () => {
      let eso = a + b;
      console.log(eso);
    });
  });
}
sum();
