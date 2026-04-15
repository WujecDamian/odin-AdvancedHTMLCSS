//put inside src/index.js
import "./styles.css";

const htmlElement = document.querySelector(":root");
const divElement = document.querySelector("div");

htmlElement.addEventListener("click", showHide);
document.addEventListener("keydown", showHide);

function showHide() {
  if (divElement.classList[0] === "fade-in") {
    divElement.classList.remove("fade-in");
    divElement.classList.add("fade-out");
  } else {
    divElement.classList.remove("fade-out");
    divElement.classList.add("fade-in");
  }
}
