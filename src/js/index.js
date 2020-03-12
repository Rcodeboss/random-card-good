/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  let symbol = ["&#9824;"];
  let number = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let out = [""];
  let s;
  let n;

  function randomC() {
    for (s = 0; s < symbol.length; s++) {
      for (n = 0; n < number.length; n++) {
        out += symbol[s] + number[n] + "<br>";
      }
    }
    document.getElementById("card").innerHTML = out;
  }

  console.log("rafa");
};
