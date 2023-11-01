const categoriesList = document.querySelector(
  "#categories"
);

const categoryItems = [
  ...categoriesList.children,
];

console.log(
  "Number of categories: " + categoryItems.length
);

categoryItems.forEach((category) => {
  const categoryName =
    category.querySelector("h2").textContent;
  const elements =
    category.querySelector("ul").children;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elements.length}`);
});
