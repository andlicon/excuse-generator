/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function elementoAleatorio(arreglo) {
  const max = arreglo.length - 1;
  const numeroAleatorio = Math.floor(Math.random() * (max - 0 + 1) + 0);
  const elemento = arreglo[numeroAleatorio];

  return elemento;
}

function generarExcusa() {
  let texto = "";

  texto += elementoAleatorio(who) + " ";
  texto += elementoAleatorio(action) + " ";
  texto += elementoAleatorio(what) + " ";
  texto += elementoAleatorio(when);

  return texto;
}

const who = ["The dog", "My grandma", "His turtle", "My bird"];
const action = ["ate", "peed", "crushed", "broke"];
const what = ["my homework", "the keys", "the car"];
const when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

window.onload = function() {
  //write your code here
  const excusa = generarExcusa();
  document.getElementById("excuse").textContent = excusa;
};
