const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  bgCange();
});

function bgCange() {
  const div = document.querySelector(".body-div");
  div.style.backgroundColor = "green";
}
