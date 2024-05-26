const red = document.querySelector(".red");
const blue = document.querySelector(".blue");
const green = document.querySelector(".green");
const yellow = document.querySelector(".yellow");
const greet = document.querySelector(".greet");
red.addEventListener("click", () => {
  red.style.backgroundColor = "red";
  red.style.color = "white";

});

blue.addEventListener("click", () => {
  blue.style.backgroundColor = "blue";
  blue.style.color = "white";

});
green.addEventListener("click", () => {
  green.style.backgroundColor = "green";
  green.style.color = "white";

});

yellow.addEventListener("click", () => {
  yellow.style.backgroundColor = "yellow";

});

greet.addEventListener("click", () => {
const text = document.querySelector(".input-name input").value;
const text1=document.querySelector(".name")
text1.innerHTML = text;
});
