import sumar from "./sumador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const formSumar = document.querySelector("#sumar-form");
const div = document.querySelector("#resultadoSuma-div");

formSumar.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});

import multiplicar from "./multiplicador";

const primero = document.querySelector("#primer-numero2");
const segundo = document.querySelector("#segundo-numero2");
const formulario = document.querySelector("#multiplicar-form");
const result = document.querySelector("#resultadoMulti-div");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  const primeroM = Number.parseInt(primero.value);
  const segundoM = Number.parseInt(segundo.value);

  result.innerHTML = "<p>" + multiplicar(primeroM, segundoM) + "</p>";
});