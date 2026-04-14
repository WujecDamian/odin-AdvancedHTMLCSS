//put inside src/index.js
import "./styles.css";

const watchMeElement = document.querySelector("#watch-me");

watchMeElement.addEventListener("animationstart", listener);
watchMeElement.addEventListener("animationend", listener);
watchMeElement.addEventListener("animationiteration", listener);

watchMeElement.className = "slide-in";

function listener(event) {
  const span = document.createElement("span");
  switch (event.type) {
    case "animationstart":
      span.textContent = `Started: elapsed time is ${event.elapsedTime}!`;
      break;
    case "animationend":
      span.textContent = `Ended: elapsed time is ${event.elapsedTime}!`;
      break;
    case "animationiteration":
      span.textContent = `New loop started at time ${event.elapsedTime}!`;
      break;
  }
  document.querySelector("#output").appendChild(span);
}
