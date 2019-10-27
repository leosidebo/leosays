let boxes = [];
boxes = document.getElementsByClassName('box');
let nextLight;
let gameOrder = [];
let currentTurn = 0;


window.onload = addColor();
mainGame();

function mainGame() {
    nextLight = Math.floor(Math.random() * boxes.length);
    gameOrder.push(nextLight);
}

function lightBoxes() {
    for(let i = 0; i < gameOrder.length; i++)
    {

    }
}

/**
 * Adds color to each box.
 */
function addColor() 
{
    shuffle(boxes);
    for(let i=0; i < boxes.length; i++)
    {
        if (i == 0) {
            boxes[i].classList.add('red');
        }

        if (i == 1) {
            boxes[i].classList.add('blue');
        }

        if (i == 2) {
            boxes[i].classList.add('green');
        }

        if (i == 3) {
            boxes[i].classList.add('yellow');
        }
    }
}

/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    console.log(array);
}