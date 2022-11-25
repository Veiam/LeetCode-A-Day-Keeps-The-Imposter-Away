// Given an unsorted array of numbers, find Kth smallest number in it.
// Please note that it is the Kth smallest number in the sorted order, not the Kth distinct element.

// sorting: time - O(NlogN), space - O(N)
const find_Kth_smallest_number = function (nums, k) {
    nums.sort((a, b) => a - b);

    return nums[k - 1];
};

console.log(`Kth smallest number is: ${find_Kth_smallest_number([1, 5, 12, 2, 5, 11], 3)}`)
// since there are two 5s in the input array, our 3rd and 4th smallest numbers should be a '5'
console.log(`Kth smallest number is: ${find_Kth_smallest_number([1, 5, 12, 2, 5, 11], 4)}`)
console.log(`Kth smallest number is: ${find_Kth_smallest_number([5, 12, 11, -1, 12], 3)}`)
