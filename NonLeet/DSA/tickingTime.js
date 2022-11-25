// Given a `<div id="clock"></div>` create a clock which displays the current hour, minutes, and seconds.

const clock = document.querySelector("#clock");

setInterval(() => {
  let date = new Date();
  clock.textContent = date.toLocaleTimeString();
}, 1000);