// Given an array of numbers sorted in ascending order,
// find the element in the array that has the minimum difference with the given ‘key’.

const search_min_diff_element = function (arr, key) {
    let start = 0, end = arr.length - 1;
    while (start <= end) {
        const mid = Math.floor(start + (end - start) / 2);
        if (arr[mid] == key) {
            return arr[mid];
        }
        else if (arr[mid] < key) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }
    
    // at the end of the while loop, 'start === end+1'
    // we are not able to find the element in the given array
    // return the element which is closest to the 'key'
    if ((arr[start] - key) < (key - arr[end])) {
        return arr[start];
    }
    return arr[end];
};


console.log(search_min_diff_element([4, 6, 10], 7))
console.log(search_min_diff_element([4, 6, 10], 4))
console.log(search_min_diff_element([1, 3, 8, 10, 15], 12))
console.log(search_min_diff_element([4, 6, 10], 17))
