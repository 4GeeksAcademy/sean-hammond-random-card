import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
// import "./assets/imgplaying-card-568201_640.jpg"
import { Button } from "bootstrap";

window.onload = function() {
  // Variables
  const valueArray = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  const suitArray = ["❤︎", "♠️", "♣️", "◆"];
  const valueDiv = document.querySelector(".value"); // number or letter on card
  const suitDiv = document.querySelector(".suit");
  
  function randomIndex(arrayName) {
    return Math.floor(Math.random() * (arrayName.length));
  }   
  
  const drawCard = ()=> {
    console.log("user clicked draw card button");

    const randomValue = randomIndex(valueArray);
    const randomSuit = randomIndex(suitArray);

    valueDiv.innerHTML = valueArray[randomValue];
    suitDiv.innerHTML = suitArray[randomSuit];
  };
  
  const drawArea = document.querySelector("#drawButton");
  drawArea.addEventListener("click", drawCard);
};