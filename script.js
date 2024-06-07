// create a 16x16 grid of square divs
// create a div
// make it a square with css
// loop through it 16 times


const boxesContainer = document.querySelector(".boxes-container");

// initialize
let numInRow = 16;
let containerWidth = 600;
let gap = 1;
let border = 0;

function calculateSquareWidth (containerWidth, numInRow, gap, border) {
  let squareWidth = (containerWidth + gap) / numInRow - (2 * border) - gap;

  // squareWidth = (600 + 2) / 25 - (2 * 2) - 2
  //             = 18.08

  // squareWidth = (600 + 2) / 30 - (2 * 2) - 2
  //             = 
  // squareWidth = Math.round(squareWidth * 1000) / 1000

  return squareWidth
}

let squareWidth = calculateSquareWidth(containerWidth, numInRow, gap, border);

function createPad (numInRow, squareWidth) {
  let gridSize = numInRow * numInRow;
  for (i = 0; i < gridSize; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.setProperty("width", `${squareWidth}px`);
    square.style.setProperty("height", `${squareWidth}px`);
    // square.style.setProperty("width", `100%`);

    boxesContainer.appendChild(square);
    console.log(square);

    square.addEventListener("mouseenter", () => {
      square.classList.add("black-bg");
    })
  }
}

createPad(numInRow, squareWidth);

const changeGridSize = document.querySelector("#change-grid-size");
changeGridSize.addEventListener("click", () => {
  numInRow = prompt("Enter the number of squares on each row (max 100)");
  boxesContainer.replaceChildren();       // remove boxes
  squareWidth = calculateSquareWidth(containerWidth, numInRow, gap, border);
  console.log(squareWidth);
  createPad(numInRow, squareWidth);
})

