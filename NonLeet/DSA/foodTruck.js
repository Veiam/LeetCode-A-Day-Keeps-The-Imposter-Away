// You're organizing a food truck festival with many different vendors. Each vendor has a menu and some vendors might be serving the same item.

// Given an array of food truck menus, return one master menu which contains all food items to be served, without duplicates.

const combinedMenu = document.querySelector('#combined-menu');

function getCombinedMenu(menus) {
  let flatMenus = menus.flat();

  let combinedMenu = new Set();
  flatMenus.forEach(item => {
    combinedMenu.add(item);
  })

  const menuNode = document.querySelector("#combined-menu");

  for (let item of combinedMenu) {
    let foodNode = document.createElement('li');
    foodNode.innerText = item;
    menuNode.appendChild(foodNode);
  }
}

getCombinedMenu([['Tacos', 'Burgers'], ['Pizza'], ['Burgers', 'Fries']]);