let boxes = [];
boxes = document.getElementsByClassName("box");
let gameOrder = [];
let currentLoop = 0;
let gameLength = 1;

window.onload = addColor();

/**
 * Adds color to each box.
 */
function addColor() {
  shuffle(boxes);
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

function mainGame() {
  currentLoop = 0;

  let mainLoop = setInterval(function() {
    console.log("ree");

    if (gameLength > 1 && currentLoop == 0) {
      boxes[gameOrder[currentLoop]].classList.remove("active");
    } else if (gameLength > 1) {
      boxes[gameOrder[currentLoop - 1]].classList.remove("active");
    }

    gameOrder.push(Math.floor(Math.random() * 4));
    console.log(boxes[gameOrder[currentLoop]].classList);
    boxes[gameOrder[currentLoop]].classList.add("active");
    console.log(boxes[gameOrder[currentLoop]]);
    currentLoop++;

    if (currentLoop == gameLength) {
      console.log("yee");
      clearInterval(mainLoop);
      gameLength++;
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
