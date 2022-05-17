// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.
// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

// Example 1:
// Input: nums = [2,3,2]
// Output: 3
// Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.

// Example 2:
// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.

// Example 3:
// Input: nums = [1,2,3]
// Output: 3

// Constraints:
// 1 <= nums.length <= 100
// 0 <= nums[i] <= 1000

/**
 * @param {number[]} nums
 * @return {number}
 * Time Complexity: O(n) where n is the length of nums
 * Space Complexity: O(1), constant space is used
 */
var rob = function (nums) {
    // base case
    if (nums.length < 2) {
        return nums.length === 1 ? nums[0] : Math.max(nums[0], nums[1]);
    }

    function robFrom(start, end) {
        let max = 0, previous = 0;
        for (let i = start; i <= end; i++) {
            // store previous max
            let temp = max;
            // get current
            let current = nums[i];
            // find out current max
            max = Math.max(current + previous, max);
            // save previous max
            previous = temp;
        }
        return keep;
    }

    // We can either pick first or pick last
    return Math.max(robFrom(0, nums.length - 2), robFrom(1, nums.length - 1));
};