var boxes = [];
boxes = document.getElementsByClassName("box");
let gameOrder = [];
let currentLoopIndex = 0;
let gameLength = 1;
let gameInProgress = false;
window.onload = addColor();

/**
 * Adds color to each box.
 */
function addColor() {
  // shuffle(boxes);
  for (let i = 0; i < boxes.length; i++) {
    if (i == 0) {
      boxes[i].classList.add("red");
    }

    if (i == 1) {
      boxes[i].classList.add("blue");
    }

    if (i == 2) {
      boxes[i].classList.add("green");
    }

    if (i == 3) {
      boxes[i].classList.add("yellow");
    }
  }
}

function onClickRed() {
  if (!gameInProgress) {
    boxes[0].classList.remove("active");
    console.log(boxes[0]);
    boxes[0].classList.add("active");
  }
}

function mainGame() {
  gameInProgress = true;
  currentLoopIndex = 0;

  let mainLoop = setInterval(function() {
    var x = document.getElementsByClassName("active");
    for (let i = 0; i < x.length; i++) {
      x[i].classList.remove("active");
    }

    gameOrder.push(Math.floor(Math.random() * 4));
    console.log(boxes[gameOrder[currentLoopIndex]].classList);
    boxes[gameOrder[currentLoopIndex]].classList.add("active");
    console.log(boxes[gameOrder[currentLoopIndex]]);
    currentLoopIndex++;

    if (currentLoopIndex == gameLength) {
      clearInterval(mainLoop);
      gameLength++;
      gameInProgress = false;
    }
  }, 2000);

  // for(let i = 0; i < gameOrder.length; i++) {}
}

/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
function shuffle(array) {
  // Kan troligen fixa denna genom att lägga de nya resultaten i en annan array
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
