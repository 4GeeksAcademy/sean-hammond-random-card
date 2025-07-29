import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { Button } from "bootstrap";

window.onload = function() {
    const drawArea = document.querySelector("#drawButton");
  drawArea.addEventListener("click", drawCard);
  // suitDivDiv.addEventListener("mouseout", ()=> div.style.color = "green");

  
  
  console.log("beginning of code");
  const valueDiv = document.querySelector("#card"); // number on face of card
  const suitDiv = document.querySelector("#suit");

  const valueArray = ["A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K"];
  const suitArray = ["heart❤︎", "spade♠️", "club♣️", "diamond◆"];

  const randomDecForValue = Math.random();
  const randomDecForSuit = Math.random();
  
  const valueNum = randomDecForValue * valueArray.length;
  const suitNum = randomDecForSuit * suitArray.length;


  

  const randomNumNoDecValue = Math.floor(valueNum);
  const randomNumNoDecSuit = Math.floor(suitNum);
  //removed decimals

  valueDiv.innerHTML = valueArray[randomNumNoDecValue];
  suitDiv.innerHTML = suitArray[randomNumNoDecSuit];

};

const drawCard = ()=> {
  
  console.log("user clicked draw card button");
};