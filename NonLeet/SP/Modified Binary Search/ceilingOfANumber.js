// Given an array of numbers sorted in an ascending order, find the ceiling of a given number ‘key’.
// The ceiling of the ‘key’ will be the smallest element in the given array greater than or equal to the ‘key’.
// Write a function to return the index of the ceiling of the ‘key’. If there isn’t any ceiling return -1.

const search_ceiling_of_a_number = function (arr, key) {
    let start = 0, end = arr.length - 1;
    if (key > arr[end]) { // if the 'key' is bigger than the biggest element
        return -1;
    }
    while (start <= end) {
        // calculate the middle of the current range
        mid = Math.floor(start + (end - start) / 2);
        if (arr[mid] == key) {
            return mid;
        }
        else if (arr[mid] < key) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }
    // since the loop is running until 'start <= end', so at the end of the while loop, 'start === end+1'
    // we are not able to find the element in the given array, so the next big number will be arr[start]
    return start;

};

console.log(search_ceiling_of_a_number([4, 6, 10], 6))
console.log(search_ceiling_of_a_number([1, 3, 8, 10, 15], 12))
console.log(search_ceiling_of_a_number([4, 6, 10], 17))
console.log(search_ceiling_of_a_number([4, 6, 10], -1))