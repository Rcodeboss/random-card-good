/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  const suite = ["♠", "♣", "♥", "♦"];
  const number = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  const selectRandomIndex = array =>
    array[Math.floor(Math.random() * (array.length - 1 - 0) + 0)];

  const suiteToClass = suite => {
    switch (suite) {
      case "♠":
        return "spade";
      case "♣":
        return "clubs";
      case "♥":
        return "hearts";
      case "♦":
        return "diamonds";
    }
  };

  const suiteE1 = document.querySelectorAll(".suite");
  const numberE1 = document.querySelector(".number");

  const suiteValue = selectRandomIndex(suite);
  const numberValue = selectRandomIndex(number);
  console.log(suiteValue, numberValue);
  console.log(suiteE1);
  suiteE1.forEach(e1 => {
    e1.classList.add(suiteToClass(suiteValue));
    e1.textContent = suiteValue;
  });
  numberE1.textContent = numberValue;

  if (suiteValue == "hearts" || "diamonds") {
    console.log("hearts" || "diamonds");
  } else {
  }
};
