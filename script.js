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

    boxesContainer.appendChild(square);

    square.addEventListener("mouseenter", () => {
      square.classList.add("black-bg");
    })
  }
}

createPad(numInRow, squareWidth);

const changeGridSize = document.querySelector("#change-grid-size");
changeGridSize.addEventListener("click", () => {
  numInRow = prompt("Enter the number of squares on each row (max 100)");
  // check proper input
  if (numInRow > 100 || numInRow < 1) {
    alert("Please enter a number between 1 and 100!");
  } else if (!Number(numInRow)) {
    alert("Please enter a valid number");
  } else {
    boxesContainer.replaceChildren();       // remove boxes
    squareWidth = calculateSquareWidth(containerWidth, numInRow, gap, border);
    createPad(numInRow, squareWidth);
  }
})

