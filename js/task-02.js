const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsElements = document.querySelector("#ingredients");

const createItemEl = ingredients.map((el) => {
  const ingredientsItemsEl = document.createElement("li");
  ingredientsItemsEl.classList.add("item");
  ingredientsItemsEl.textContent = el;

  return ingredientsItemsEl;
});

ingredientsElements.append(...createItemEl);
