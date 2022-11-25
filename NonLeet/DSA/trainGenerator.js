// Create a generator function called `getStop` which yields different stops on the trainline from Poughkeepsie to Grand Central Station.
// You will have a button with an id of `next-stop` that, when clicked, will console log the next stop or if the end of the line has been reached will console log "We made it!"

function* getStop() {
  yield "Poughkeepsie"
  yield "Newburgh"
  yield "Peekskill"
  yield "Yonkers"
  yield "Bronx"
  yield "Grand Central"
}

const trainline = getStop();
const stopButton = document.querySelector("#next-stop");
stopButton.addEventListener("click", () => {
  let currStop = trainline.next();
  if (currStop.done) {
    console.log("We made it!");
    stopButton.setAttribute("disabled", true);
  }
  else {
    console.log(currStop);
  }
});