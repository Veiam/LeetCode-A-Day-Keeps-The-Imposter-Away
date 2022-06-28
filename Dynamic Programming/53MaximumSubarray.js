// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
// A subarray is a contiguous part of an array.

// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// Example 2:
// Input: nums = [1]
// Output: 1

// Example 3:
// Input: nums = [5,4,-1,7,8]
// Output: 23

// Constraints:
// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104

/**
 * @param {number[]} nums
 * @return {number}
 * Time complexity: O(n), one pass.
 * Space complexity: O(1), constant space is used.
 */
const maxSubArray = function (nums) {
    let maxSub = nums[0];
    let curSub = nums[0];
    for (let i = 1; i < nums.length; i++) {
        // Kanade's algorithm
        // See if the current num is worth adding to current sub
        curSub = Math.max(nums[i], curSub + nums[i]);
        // Calculate max
        maxSub = Math.max(curSub, maxSub);
    }
    return maxSub;
};