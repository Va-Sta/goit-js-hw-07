function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector("#controls input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const output = document.querySelector("div#boxes");
const createBoxes = (amount) => {
  output.innerHTML = "";
  const divElems = [];
  let size = 30;
  for (let i = 1; i <= amount; i++) {
    const divElem = document.createElement("div");
    divElem.style.backgroundColor = getRandomHexColor();
    divElem.style.width = size + "px";
    divElem.style.height = size + "px";
    size += 10;
    divElems.push(divElem);
  }
  output.append(...divElems);
};

const clickCreateHandler = () => {
  const number = input.value;
  const validInput = number >= 1 && number <= 100;
  if (!validInput) {
    return alert("Wrong number");
  }
  createBoxes(number);
  input.value = "";
};
const clickDestroyHandler = () => {
  output.innerHTML = "";
};

createButton.addEventListener("click", clickCreateHandler);
destroyButton.addEventListener("click", clickDestroyHandler);
