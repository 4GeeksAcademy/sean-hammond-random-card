import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {

  valueDiv.addEventListener("mouseover", drawCard());
  valueDiv.addEventListener("mouseout", ()=> div.style.color = "green");

  console.log("beginning of code");
  const cardDiv = document.querySelector("#card");
  const suitDiv = document.querySelector("#card");

  const randomDec = Math.random();
  
  const randomLongNum = randomDec * valueArray.length;

  const randomNumNoDec = Math.floor(randomLongNum);
  //removed decimals


  
  const valueArray = ["A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K"];
  const suitArray = ["heart❤︎", "spade♠️", "club♣️", "diamond◆"];

  cardDiv.innerHTML = valueArray[randomNumNoDec];
  suitDiv.innerHTML = valueArray[randomNumNoDec];

  console.log("random card value should be:", div.innerHTML = valueArray[randomNumNoDec]);
};

const drawCard = ()=> {
  console.log("user clicked draw card button");
};