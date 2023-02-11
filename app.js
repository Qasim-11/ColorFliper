const colors = [  "Black",    "Gray",    "White",  "Red",  "Green",  "Blue",  "Yellow",  "Cyan",  "Magenta"  ,  "Silver",  "Pale Green",  "Light Blue",  "Pale Magenta",  "Puce",  "Light Green",  "Light Cyan",  "Pink",  "Turquoise",  "Violet",  "Navy",  "Olive",  "Maroon",  "Lime",  "Purple",  "Teal",  "Aqua"];
;
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
  // color.style.color =colors[randomNumber]
  if (colors[randomNumber] == "White") {
    color.style.color = "#222"
  } 

});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}