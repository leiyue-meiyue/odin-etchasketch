// create a 16x16 grid of square divs
// create a div
// make it a square with css
// loop through it 16 times


const boxesContainer = document.querySelector(".boxes-container");

let numInRow = 16;


function createPad (numInRow) {
  let gridSize = numInRow * numInRow;
  for (i = 0; i < gridSize; i++) {
    // create element and add as child to container
    const square = document.createElement("div");
    square.classList.add("square");
    boxesContainer.appendChild(square);
  
    square.addEventListener("mouseenter", () => {
      square.classList.add("black-bg");
    })
  }
}

createPad(numInRow);

const changeGridSize = document.querySelector("#change-grid-size");
changeGridSize.addEventListener("click", () => {
  numInRow = prompt("Enter a number between 1 and 100");
  boxesContainer.replaceChildren();       // remove boxes
  createPad(numInRow);
})