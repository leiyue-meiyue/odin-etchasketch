// create a 16x16 grid of square divs
// create a div
// make it a square with css
// loop through it 16 times


const boxesContainer = document.querySelector(".boxes-container");

// loop thru it 16 times
let numInRow = 256;
for (i = 0; i < numInRow; i++) {
  // create element and add as child to container
  const square = document.createElement("div");
  square.classList.add("square");
  boxesContainer.appendChild(square);

  square.addEventListener("mouseenter", () => {
    square.classList.add("black-bg");
  })
}

