"use strict";

require("core-js/modules/web.timers.js");
function chooseHole(max) {
  return Math.floor(Math.random() * max);
}
var holes = document.getElementsByClassName('hole');
var img = '<img src="./img/goblin.png">';
var currentHole = 0;
var newHole = 0;
function runGame() {
  setInterval(function () {
    newHole = chooseHole(holes.length - 1);
    if (newHole === currentHole && newHole !== holes.length - 1) {
      newHole += 1;
    }
    if (newHole === currentHole && newHole === holes.length - 1) {
      newHole -= 1;
    }
    holes[newHole].innerHTML = img;
    holes[currentHole].innerHTML = ' ';
    currentHole = newHole;
  }, 1000);
}
runGame();