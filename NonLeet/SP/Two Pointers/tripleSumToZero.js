// Given an array of unsorted numbers, find all unique triplets in it that add up to zero.



const search_triplets = function (arr) {
    const triplets = [];
    // First, we will sort the array and then iterate through it taking one number at a time.
    arr.sort((a, b) => a - b);
    for (let index = 0; index < arr.length; index++) {
        const val = arr[index];
        // skip same element to avoid duplicate triplets
        if (val == arr[index - 1]) {
            continue;
        }
        // Let’s say during our iteration we are at number ‘X’, so we need to find ‘Y’ and ‘Z’ such that
        // X + Y + Z = 0 or -X = Y + Z
        searchPair(arr, triplets, index + 1, -val);
    }
    return triplets;
};

function searchPair(arr, triplets, start, targetSum) {
    let end = arr.length - 1;
    console.log(arr, triplets, start, targetSum);
    while (start < end) {
        const leftVal = arr[start], rightVal = arr[end], sum = leftVal + rightVal;
        // found the triplet
        if (sum == targetSum) {
            triplets.push([-targetSum, leftVal, rightVal]);
            start++;
            end--;
            while (start < end && arr[start] === arr[start - 1]) {
                start += 1; // skip same element to avoid duplicate triplets
            }
            while (start < end && arr[end] === arr[end + 1]) {
                end -= 1; // skip same element to avoid duplicate triplets
            }
        }
        // need a smaller sum
        if (sum > targetSum) {
            end--;
        }
        // need a bigger sum
        else {
            start++;
        }
    }
}