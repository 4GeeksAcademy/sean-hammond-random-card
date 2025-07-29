import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { Button } from "bootstrap";

window.onload = function() {
  const drawArea = document.querySelector("#drawButton");
  drawArea.addEventListener("click", drawCard);
  
  

};

const drawCard = ()=> {
  console.log("user clicked draw card button");

  const valueDiv = document.querySelector("#value"); // number or letter on card
  const suitDiv = document.querySelector("#suit");

  const valueArray = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  const suitArray = ["❤︎", "♠️", "♣️", "◆"];

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