// Given an array of Italian dinner dishes, create a menu which contains only the vegetarian options.

// Each menu array index contains a dish object. A dish object contains the dish name and a boolean value indicating whether the dish is vegetarian.

function vegetarianMenu(menu) {
  const menuNode = document.querySelector("#menu");
  const vegetarianOptions = menu.filter((option) => option.isVegetarian === true);

  vegetarianOptions.forEach((option) => {
    let dish = document.createElement("li");
    dish.textContent = option.namel
    menuNode.appendChild(dish)
  });
}

vegetarianMenu([
  {
    name: "Chicken parmesan",
    isVegetarian: false,
  },
  {
    name: "Penne a la vodka",
    isVegetarian: true,
  },
  {
    name: "Mushroom risotto",
    isVegetarian: true,
  },
  {
    name: "Veal saltambuca",
    isVegetarian: false,
  },
  {
    name: "Filet mignon",
    isVegetarian: false,
  },
]);
