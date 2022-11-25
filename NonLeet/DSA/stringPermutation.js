// Given a string, calculate the number of all possible letter combinations.

function numPermutations(letters) {
  if (letters.length === 1) {
    return 1;
  }
  return letters.length * numPermutations(letters.slice(1));
}

console.log(numPermutations("hello"));