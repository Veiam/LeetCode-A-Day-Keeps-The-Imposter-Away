// Given an array of positive numbers and a positive number ‘k,’
// find the maximum sum of any contiguous subarray of size ‘k’.

// time O(N) and space O(1)
const max_sub_array_of_size_k = function (k, arr) {
    let max = 0, cur = 0, start = 0;
    for (let i = 0; i < arr.length; i++) {
        cur += arr[i];// add the next element
        // slide the window, we don't need to slide if we've not hit the required window size of 'k'
        if (i >= k - 1) {
            max = Math.max(max, cur);
            cur -= arr[start]; // subtract the element going out
            start++; // slide the window ahead
        }
    }
    return max;
};

console.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2])}`);
console.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(2, [2, 3, 4, 1, 5])}`);

// Subtract the element going out of the sliding window, i.e., subtract the first element of the window.
// Add the new element getting included in the sliding window, i.e., the element coming right after the end of the window.