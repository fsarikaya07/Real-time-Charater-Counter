const textEl = document.getElementById("text");
const totalEl = document.getElementById("total-counter");

const remainEl = document.getElementById("remaining-counter");

textEl.addEventListener("keyup", () => {
  totalTextLength();
  remainingCounterLength();
});
function totalTextLength() {
  totalEl.innerText = textEl.value.length;
}

function remainingCounterLength() {
  remainEl.innerText = 50 - textEl.value.length;
}
