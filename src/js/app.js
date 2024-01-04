function chooseHole(max) {
  return Math.floor(Math.random() * max);
}
const holes = document.getElementsByClassName('hole');
const img = '<img src="./img/goblin.png">';
let currentHole = 0;
let newHole = 0;
function runGame() {
  setInterval(
    () => {
      newHole = chooseHole(holes.length - 1);
      if (newHole === currentHole && newHole !== (holes.length-1)) {
        newHole += 1;
      }
      if (newHole === currentHole && newHole === (holes.length-1)) {
        newHole -= 1;
      }
      holes[newHole].innerHTML = img;
      holes[currentHole].innerHTML = ' ';
      currentHole = newHole;
    },
    1000,
  );
}
runGame();
