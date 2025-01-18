const categories = document.querySelectorAll("ul#categories li.item");
console.log(`Number of categories: ${categories.length}`);
categories.forEach((category) => {
  const elH2Text = category.querySelector("h2").textContent;
  const elemArrayNumber = category.querySelectorAll("li").length;
  console.log(`Category: ${elH2Text}\nElements: ${elemArrayNumber}`);
});
