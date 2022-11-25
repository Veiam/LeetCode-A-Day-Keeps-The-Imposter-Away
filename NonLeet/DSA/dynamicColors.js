// Create three buttons: blue, pink, and green. When each button is clicked, you should set the background of the document body to the selected color.

function changeColor(color) {
  return function () {
    document.body.style.background = color;
  };
}

const bgColorBlue = changeCOlor("#0f62fe");
const bgColorPink = changeCOlor("#ff7eb6");
const bgColorGreen = changeCOlor("#42be54");

document.querySelector('#blue').addEventListener("click", bgColorBlue);
document.querySelector('#pink').addEventListener("click", bgColorPink);
document.querySelector('#green').addEventListener("click", bgColorGreen);