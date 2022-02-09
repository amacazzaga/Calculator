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
let symbolVisor = [];
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
      if (turn === "left") {
        arrOfNumbersOnVisor.push(valueOfButtonClicked);
        toNumberLeft = Number(arrOfNumbersOnVisor.join(""));
        visor.innerText = toNumberLeft;
      } else if (turn === "right") {
        arrOfNumbersOnVisorB.push(valueOfButtonClicked);
        toNumberRight = Number(arrOfNumbersOnVisorB.join(""));
        visor.innerText = toNumberLeft + symbolVisor + toNumberRight;
      }
    });
  });
  arrOfSymbol.map((el) => {
    const symbolClicked = el;
    symbolClicked.addEventListener("click", () => {
      symbolVisor.push(symbolClicked.id);
      visor.innerText = toNumberLeft + symbolVisor;
    });
  });
}
///////////////////////////////////////////////////////
function sum() {
  buttonSum.addEventListener("click", () => {
    turn = "right";
    function resultPlus() {
      buttonResult.onclick = function e() {
        let result = toNumberLeft + toNumberRight;
        toNumberLeft = result;
        arrOfNumbersOnVisorB = [];
        symbolVisor = [];
        visor.innerText = result;
      };
    }
    resultPlus();
  });
}
/////////////////////////////////////////
function mult() {
  buttonMultiplication.addEventListener("click", () => {
    turn = "right";
    function resultMultiply() {
      buttonResult.onclick = function e() {
        let result = toNumberLeft * toNumberRight;
        toNumberLeft = result;
        symbolVisor = [];
        arrOfNumbersOnVisorB = [];
        visor.innerText = result;
      };
    }
    resultMultiply();
  });
}
//////////////////////////////////
function subs() {
  buttonSubstraction.addEventListener("click", () => {
    turn = "right";
    function resultSubs() {
      buttonResult.onclick = function e() {
        let result = toNumberLeft - toNumberRight;
        toNumberLeft = result;
        symbolVisor = [];
        arrOfNumbersOnVisorB = [];
        visor.innerText = result;
      };
    }
    resultSubs();
  });
}
////////////////////////////////
function divide() {
  buttonDivision.addEventListener("click", () => {
    turn = "right";
    function resultDivi() {
      buttonResult.onclick = function e() {
        let result = toNumberLeft / toNumberRight;
        toNumberLeft = result;
        symbolVisor = [];
        arrOfNumbersOnVisorB = [];
        visor.innerText = result;
      };
    }
    resultDivi();
  });
}
//////////////////////////////////////////////////////
function clearVisor() {
  buttonClear.onclick = function clear() {
    arrOfNumbersOnVisor = [];
    arrOfNumbersOnVisorB = [];
    symbolVisor = [];
    toNumberLeft = undefined;
    toNumberRight = undefined;
    visor.innerText = " ";
    turn = "left";
  };
}
visorInfo(arrOfNumbersOnVisor, arrOfButtonNumbers);
clearVisor();
sum();
subs();
mult();
divide();
