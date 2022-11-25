// Given an unsorted array of numbers and a target ‘key’,
// remove all instances of ‘key’ in-place and return the new length of the array.
function remove_element(arr, key) {
    let nonKey = 0, index = 0;
    while (index < arr.length) {
        if (arr[index] != key) {
            arr[nonKey] = arr[index];
            nonKey++;
        }
        index++;
    }
    return nonKey;
}