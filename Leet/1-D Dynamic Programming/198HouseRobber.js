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

/**
 * @param {number[]} nums
 * @return {number}
 * Time and Space Complexity: O(n), Recursion can go up to number of nums
 */
var rob = function (nums) {
    const memo = [], length = nums.length;

    function robFrom(pos) {
        if (pos >= length) {
            return 0;
        }

        // if not memoized, we can eitehr rob from this or skip
        if (typeof memo[pos] === 'undefined') {
            memo[pos] = Math.max(robFrom(pos + 2) + nums[pos], robFrom(pos + 1));
        }

        return memo[pos];
    }

    return robFrom(0);
};

/**
 * @param {number[]} nums
 * @return {number}
 * Time Complexity: O(n), we look at each house once
 * Space Complexity: O(1), constant space is used
 */
var rob = function (nums) {
    const length = nums.length;
    // we only need to keep track of previous 2 cases
    let robNext = nums[length - 1], robNextNext = 0;


    // loop backward (can be forward as well), and update cases
    for (let i = length - 2; i >= 0; i--) {
        [robNext, robNextNext] = [Math.max(robNextNext + nums[i], robNext), robNext];
    }

    return robNext;
};