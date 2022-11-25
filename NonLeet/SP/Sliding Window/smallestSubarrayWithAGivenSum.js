// Given an array of positive numbers and a positive number ‘S,’
// find the length of the smallest contiguous subarray whose sum is
// greater than or equal to ‘S’. Return 0 if no such subarray exists.

// time O(N + N) and space O(1)
const smallest_subarray_with_given_sum = function (s, arr) {
    let min = Infinity, cur = 0, start = 0;
    for (let i = 0; i < arr.length; i++) {
        cur += arr[i]; // add the next element
        // shrink the window as small as possible until the 'window_sum' is smaller than 's'
        while (cur >= s) {
            min = Math.min(i - start + 1, min);
            cur -= arr[start];
            start++;

        }
    }
    return min != Infinity ? min : 0;
};
