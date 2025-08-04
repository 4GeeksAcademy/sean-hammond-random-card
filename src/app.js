import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
// import "./assets/imgplaying-card.jpg"
import { Button } from "bootstrap";

window.onload = function() {
  // Variables
  const valueArray = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  const suitArray = ["♥", "♠", "♣", "♦"];
  const value = document.querySelectorAll(".value"); // number or letter on card
  const suit = document.querySelectorAll(".suit");
  
  function randomIndex(arrayName) {
    return Math.floor(Math.random() * (arrayName.length));
  }   
  
  // Function that generates random card value/suit
  const drawCard = ()=> {
    console.log("user clicked draw card button");

    const randomValue = randomIndex(valueArray);
    const randomSuit = randomIndex(suitArray);

    // Change printed value/suit everywhere
    value.forEach(valueText => {
        valueText.textContent = valueArray[randomValue];
        if(suitArray[randomSuit] == "♦" || suitArray[randomSuit] == "♥") {
          valueText.style.color = "red";
        } else if(suitArray[randomSuit] == "♠" || suitArray[randomSuit] == "♣") {
          valueText.style.color = "black";
        }
    });
    suit.forEach(suitText => {
        suitText.textContent = suitArray[randomSuit];
        if(suitArray[randomSuit] == "♦" || suitArray[randomSuit] == "♥") {
          console.log("suitText is a diamond or heart");
          suitText.style.color = "red";
        } else if(suitArray[randomSuit] == "♠" || suitArray[randomSuit] == "♣") {
          console.log("suitText is a spade or club");
          suitText.style.color = "black";
        }
    });
    
  };

  // Border around card back changes when hovered over
  const highlightCard = ()=> {
    drawBtn.style.backgroundColor = "salmon";
  }
  const unHighlightCard = ()=> {
    drawBtn.style.backgroundColor = "white";
  }
  
  const drawBtn = document.querySelector("#drawBtn");
  drawBtn.addEventListener("click", drawCard);
  drawBtn.addEventListener("mouseover", highlightCard);
  drawBtn.addEventListener("mouseout", unHighlightCard);
};