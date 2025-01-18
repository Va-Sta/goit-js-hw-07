const spanElem = document.querySelector("span#name-output");
const inputHandler = () => {
  let value = inputElem.value.trim();
  if (value === "") {
    spanElem.textContent = "Anonymous";
  } else {
    spanElem.textContent = value;
  }
};
inputElem.addEventListener("input", inputHandler);
