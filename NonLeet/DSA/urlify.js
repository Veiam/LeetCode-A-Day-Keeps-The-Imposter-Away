// Create a function called urlify which takes in a blog title and outputs a url-friendly string where each word is lowercase and spaces are replaced with hyphens. Remember to remove all apostrophes.

// ```
// ("How I Got Into Programming!!!") => "how-i-got-into-programming"
// ```

function urlify(title) {
  const punctuation = /[.,/#!$%^&*;:{}=!\-_`~()'"]/g;
  
  const formattedTitle = blogTitle.replace(punctuation, "");
  return blogTitleWithoutPunctuation.toLowerCase().trim().replaceAll(" ", "-");
}

console.log(urlify("How I Got Into Programming!!!"));
console.log(urlify("I've got a new job :)"));
