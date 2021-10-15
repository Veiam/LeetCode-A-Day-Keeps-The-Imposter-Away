// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.

// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Example 2:
// Input: nums = [0]
// Output: [0]

// Constraints:
// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
    for (let index = 0, lastNonZero = 0; index < nums.length; index++) {
        // keep track of last non zero index
        // then swap current index if it's non zero and increase last non zero index
        if (nums[index] !== 0) {
            [nums[lastNonZero], nums[index]] = [nums[index], nums[lastNonZero]];
            lastNonZero++;
        }
    }
};