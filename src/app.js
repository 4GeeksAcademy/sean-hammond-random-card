import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const div = document.querySelector("#card");

  const randomDec = Math.random();
  
  const randomLongNum = random * 5;

  const randomNumNoDec = Math.floor(randomLongNum);
  //removed decimals

  div.innerHTML = randomNumNoDec;
};