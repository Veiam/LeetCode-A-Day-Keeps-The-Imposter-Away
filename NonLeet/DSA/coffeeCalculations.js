// You and a group of friends have spent all day hanging out at a coffee shop. Each person has ordered some number of coffees, and you want to pay the entire bill.
// Given an array of integers > 0 representing the number of coffees each friend ordered, calculate the total price of all coffees. Each coffee costs `$1.25`.

function coffeeDate(coffeeArr) {
  let coffeeSum = coffeeArr.reduce(
    (totalCoffees, numCoffees) => (totalCoffees += numCoffees)
  );
  return `The total bill is $${coffeeSum * 1.25}`;
}

console.log(coffeeDate([2, 5, 7, 1, 4]));
