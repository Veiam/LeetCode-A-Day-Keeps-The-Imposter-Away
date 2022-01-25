// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Example 1:
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// Example 2:
// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

// Constraints:
// 1 <= nums.length <= 105
// -231 <= nums[i] <= 231 - 1
// 0 <= k <= 105

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 * Time complexity: O(n). Only one pass is used.
 * Space complexity: O(1). Constant extra space is used.
 */
const rotate = function (nums, k) {
    let [start, count] = [0, 0];
    // we only wants to swap nums.length elements
    while (count < nums.length) {
        // store starting values
        let [currentIndex, preVal] = [start, nums[start]];
        do {
            // if current goes over the length
            // it should circle back to 0.
            currentIndex = (currentIndex + k) % nums.length;
            // swap previous value and current value;
            [nums[currentIndex], preVal] = [preVal, nums[currentIndex]];
            count++;
        } while (currentIndex !== preVal)
        // if we are back where we started
        // iterate for the next index
        start++
    }
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 * Time complexity: O(n). n elements are reversed a total of two times.
 * Space complexity: O(1. No extra space is used.SS
 */
const rotate = function (nums, k) {
    k %= nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);

}

// when we rotate the array k times, k elements from the back ned of the array come to the front
// and the rest of the elements from the front shift
const reverse = function (nums, start, end) {
    while (start < end) {
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}