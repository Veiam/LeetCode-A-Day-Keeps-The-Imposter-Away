// Given an array containing 0s, 1s and 2s, sort the array in-place.
// You should treat numbers of the array as objects, hence, we can’t count 0s, 1s, and 2s to recreate the array.
const dutch_flag_sort = function (arr) {
    let left = 0, right = arr.length - 1, index = 0;
    // as long as current index doesn't exceed right limit, loop
    while (index <= right) {
        // value is 0
        // so we want to swap the current left with current index
        if (arr[index] === 0) {
            // swap
            [arr[index], arr[left]] = [arr[left], arr[index]];
            // increment 'index' and 'low'
            index++;
            left++;
        }
        // value is 1, so we don't do anything
        else if (arr[index] === 1) {
            // increment index
            index++;
        }
        // value is 2
        else {
            // so we want to swap the current left with current index
            [arr[index], arr[right]] = [arr[right], arr[index]];
            // decrement right 
            right--;
        }
    }
    // return sorted flag
    return arr;
};

console.log(dutch_flag_sort([1, 0, 2, 1, 0]));
console.log(dutch_flag_sort([2, 2, 0, 1, 2, 0]));