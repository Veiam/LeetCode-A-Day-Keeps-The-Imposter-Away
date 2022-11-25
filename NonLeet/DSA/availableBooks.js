// You're developing an inventory application for a bookstore.
// You need to create a JavaScript class, "Book", that accepts a title, author,
// ISBN (International Standard Book Number), and the number of available copies.

// You should provide a getter function called 'availability' that checks the number of available copies
// and returns "Out of stock" if it's zero, "Low stock" if it's less than 10, and "In stock" if it's 10 or greater.

// You should add a sell method which accepts the number of copies to sell and subtracts it from the number of copies. The number of copies to sell should have a default value of one.

// You should add a restock method which accepts the number of copies to restock and adds it to the number of total copies. The number of copies to restock should have a default value of five.

class Book {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }ß

  get availability() {
    return this.numCopies === 0 ? "Out of stock" : (this.numCopies < 10 ? "Low stock" : "In stock");
  }

  sell(num = 1) {
    this.numCopies -= num;
  }

  restock(num = 5) {
    this.numCopies += num;
  }
}

const HungerGames = new Book("Hunger Games", "Suzanne Collins", 123919, 5);
console.log(HungerGames.availability);
HungerGames.restock(12);
console.log(HungerGames.availability);
HungerGames.sell(17);
console.log(HungerGames.availability);
