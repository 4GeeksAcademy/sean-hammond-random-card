import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const div = document.querySelector("#card");

  const randomDec = Math.random();
  
  const randomLongNum = random * MyArray.length;

  const randomNumNoDec = Math.floor(randomLongNum);
  //removed decimals

  const myArray = ["A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K"];

  div.innerHTML = myArray[randomNumNoDec];
};