// Create a Movie object that takes in five arguments:

// - title
// - director
// - genre
// - releaseYear
// - rating

// Add a function called `getOverview` on the Movie prototype which console
// logs the following overview for each film:

// "<movie>, a <genre> film directed by <director> was released in <releaseYear>. It received a rating of <rating>."

class Movie {
  constructor(title, director, genre, releaseYear, rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
  }

  getOverView(){
    return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}`;
  }
}

const Spiderman = new Movie("Spiderman", "Sam Raimi", "Action", 2002, 87);

const Batman = new Movie(
  "The Dark Knight",
  "Christopher Nolan",
  "Action",
  2008,
  83
);

const TheNotebook = new Movie(
  "The Notebook",
  "Nick Cassavetes",
  "Romance",
  2004,
  54
);

console.log(Spiderman);
console.log(Spiderman.getOverview());
console.log(Batman.getOverview());
console.log(TheNotebook.getOverview());
