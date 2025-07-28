import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const div = document.querySelector("#specialdiv");
  div = "new text abc";
  document.getElementById('specialdiv').innerText = 'New text';

  console.log("Hello Rigo from the console!");
};
