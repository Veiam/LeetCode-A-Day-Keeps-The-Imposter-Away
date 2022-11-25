// Given an array of lowercase letters sorted in ascending order, find the smallest letter in the given array greater than a given ‘key’.
// Assume the given array is a circular list, which means that the last letter is assumed to be connected with the first letter.
// This also means that the smallest letter in the given array is greater than the last letter of the array and is also the first letter of the array.
const search_next_letter = function (letters, key) {
    let start = 0, end = letters.length - 1;
    if (key < letters[start] || key >= letters[end]) {
        return letters[0];
    }
    while (start <= end) {
        const mid = Math.floor(start + (end - start) / 2);
        if (letters[mid] == key) {
            return letters[mid + 1];
        } else if (letters[mid] < key) {
            start = mid + 1;
        } else{
            end = mid - 1;
        }
    }
    return letters[start];
};


console.log(search_next_letter(['a', 'c', 'f', 'h'], 'f'))
console.log(search_next_letter(['a', 'c', 'f', 'h'], 'b'))
console.log(search_next_letter(['a', 'c', 'f', 'h'], 'm'))
