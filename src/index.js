//put inside src/index.js
import "./styles.css";

const watchMeElement = document.querySelector("#watch-me");

watchMeElement.addEventListener("animationstart", listener);
watchMeElement.addEventListener("animationend", listener);
watchMeElement.addEventListener("animationiteration", listener);

watchMeElement.className = "slide-in";

function listener(event) {
  const li = document.createElement("li");
  switch (event.type) {
    case "animationstart":
      li.textContent = `Started: elapsed time is ${event.elapsedTime}!`;
      break;
    case "animationend":
      li.textContent = `Ended: elapsed time is ${event.elapsedTime}!`;
      break;
    case "animationiteration":
      li.textContent = `New loop started at time ${event.elapsedTime}!`;
      break;
  }
  document.querySelector("#output").appendChild(li);
}
