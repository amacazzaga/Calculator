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
const buttonSum = document.getElementById("sum");
const buttonSubstraction = document.getElementById("substraction");
const buttonMultiplication = document.getElementById("multiplication");
const buttonDivision = document.getElementById("division");
const buttonResult = document.getElementById("result");
let visor = document.getElementById("visor");
let textOnVisor = visor.innerText;
let arrOfNumbersOnVisor = [];
const arrOfButtonNumbers = [
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
];
function visorInfo() {
  arrOfButtonNumbers.map((el) => {
    const buttonClicked = el.boton;
    const valueOfButtonClicked = el.value;
    buttonClicked.addEventListener("click", () => {
      arrOfNumbersOnVisor.push(valueOfButtonClicked);
      const joinedToNumber = Number(arrOfNumbersOnVisor.join(""));
      visor.innerText = joinedToNumber; // visor will be string!
    });
  });
}
visorInfo(arrOfNumbersOnVisor, arrOfButtonNumbers);
