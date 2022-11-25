// Given an array, find the length of the smallest subarray in it which when sorted will sort the whole array.

function shortest_window_sort(arr) {
    // set up a two pointer
    let low = 0, high = arr.length - 1;
    // find the first number out of sorting order from the beginning
    while ((low < arr.length - 1 && arr[low] <= arr[low + 1])) {
        low++;
    }
    // if low reached the end, then array is sorted
    if (low === arr.length - 1) {
        return 0;
    }

    // find the first number out of sorting order from the end
    while (high > 0 && arr[high] >= arr[high - 1]) {
        high -= 1;
    }

    // find the maximum and minimum of the subarray
    let subarrayMax = -Infinity, subarrayMin = Infinity;

    for (k = low; k < high + 1; k++) {
        subarrayMax = Math.max(subarrayMax, arr[k]);
        subarrayMin = Math.min(subarrayMin, arr[k]);
    }

    // extend the subarray to include any number which is bigger than the minimum of the subarray
    if (low > 0 && arr[low - 1] > subarrayMin) {
        low--;
    }
    // extend the subarray to include any number which is smaller than the maximum of the subarray
    if (high < arr.length - 1 && arr[high + 1] < subarrayMax) {
        high++;
    }

    return high - low + 1;
}


console.log(shortest_window_sort([1, 2, 5, 3, 7, 10, 9, 12]));
console.log(shortest_window_sort([1, 3, 2, 0, -1, 7, 10]));
console.log(shortest_window_sort([1, 2, 3]));
console.log(shortest_window_sort([3, 2, 1]));