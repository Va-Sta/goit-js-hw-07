function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonElem = document.querySelector("button.change-color");
const clickHandler = () => {
  const newColor = getRandomHexColor();
  document.querySelector("body").style.backgroundColor = newColor;
  document.querySelector("span.color").textContent = newColor;
};
buttonElem.addEventListener("click", clickHandler);
