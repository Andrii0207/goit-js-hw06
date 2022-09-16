const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfIngredients = document.querySelector("#ingredients")

const item = ingredients.map(ingredient => {
  const el = document.createElement("li")
  
  el.textContent = ingredient;
  el.classList.add("item")
  return el;
})

listOfIngredients.append(...item)