// Given an array of non-negative integers nums, you are initially positioned at the first index of the array.
// Each element in the array represents your maximum jump length at that position.
// Your goal is to reach the last index in the minimum number of jumps.
// You can assume that you can always reach the last index.

// Example 1:
// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.

// Example 2:
// Input: nums = [2,3,0,1,4]
// Output: 2

// Constraints:
// 1 <= nums.length <= 104
// 0 <= nums[i] <= 1000

/**
 * Greedy
 * Before we reach our current index's max jump distance
 * We calculate the next max distance we can reach
 * This only works because we can always reach the end
 * @param {number[]} nums
 * @return {number}
 * Time complexity: O(n), loop through it once
 * Space complexity: O(1), constant space
 */
const jump = function (nums) {
    let jumps = 0, farthest = 0, jumpEnd = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        // we continuously find the how far we can reach in the current jump
        farthest = Math.max(farthest, i + nums[i]);
        // if we have come to the end of the current jump,
        // we need to make another jump
        if (i === jumpEnd) {
            jumps++;
            jumpEnd = farthest;
        }
    }
    return jumps;
};