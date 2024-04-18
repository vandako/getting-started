//get the button element through its id
let button = document.getElementById("changecolor");

//define an array of colors
let colors = ["green", "yellow", "blue", "red", "orange", "brown", "pink"];

//define a variable to store the current color index
let colorIndex = 0;

//add a click event listener to the button
button.addEventListener("click", function () {
  //increment the color index by one
  colorIndex++;

  //if the color index is equal to the lenght of the color array,reset it to zero
  if (colorIndex == colors.lenght) {
    colorIndex = 0;
  }

  //get the current color from the color array
  let currentColor = colors[colorIndex];

  //change the backgrond color of the body element to the current color
  document.body.style.backgroundColor = currentColor;
});
