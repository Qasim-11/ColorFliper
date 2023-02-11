const colors = [  "#000000",  "#333333",  "#666666",  "#999999",  "#cccccc",  "#ffffff",  "#ff0000",  "#00ff00",  "#0000ff",  "#ffff00",  "#00ffff",  "#ff00ff",  "#f0f0f0",  "#e6e6e6",  "#ccffcc",  "#ccccff",  "#ffccff",  "#cc6699",  "#99cc66",  "#66cc99",  "#6699cc",  "#9966cc",  "#cc9966",  "#003366",  "#336600",  "#660033",  "#663300",  "#330066",  "#006633"];
;
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
  // color.style.color = colors[randomNumber]
  color.style.textTransform = "uppercase"
  if (colors[randomNumber] == "#ffffff") {
    color.style.color = "#222"
  } 

});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}