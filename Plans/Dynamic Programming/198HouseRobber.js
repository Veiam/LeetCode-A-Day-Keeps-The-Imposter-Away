// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.

// Example 2:
// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12.

// Constraints:
// 1 <= nums.length <= 100
// 0 <= nums[i] <= 400
// Accepted
// 1,132,585
// Submissions
// 2,395,576

/**
 * Top-down
 * @param {number[]} nums
 * @return {number}
 * Time Complexity: O(n), need n recursive cals
 * Spaec Complexity: O(n), recursion stack
 */
const rob = function (nums) {
    const memo = [];
    function robFrom(pos) {
        if (pos >= nums.length) {
            return 0;
        }
        if (typeof memo[pos] === 'undefined') {
            memo[pos] = Math.max(robFrom(pos + 2) + nums[pos], robFrom(pos + 1));
        }
        return memo[pos];
    }

    return robFrom(0);
};

/**
 * Bottom-up
 * @param {number[]} nums
 * @return {number}
 * Time Complexity: O(n), loop through n-2 to 0
 * Space Complexity: O(1), constant space is used
 */
const rob = function (nums) {
    const length = nums.length;
    robNextPlusOne = 0;
    robNext = nums[length - 1];
    for (let i = length - 2; i >= 0; i--) {
        const robbed = Math.max(robNextPlusOne + nums[i], robNext);
        robNextPlusOne = robNext;
        robNext = robbed;
    }
    return robNext;
};