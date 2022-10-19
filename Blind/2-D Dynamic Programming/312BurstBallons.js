// You are given n balloons, indexed from 0 to n - 1. Each balloon is painted with a number on it represented by an array nums. You are asked to burst all the balloons.
// If you burst the ith balloon, you will get nums[i - 1] * nums[i] * nums[i + 1] coins. If i - 1 or i + 1 goes out of bounds of the array, then treat it as if there is a balloon with a 1 painted on it.
// Return the maximum coins you can collect by bursting the balloons wisely.

// Example 1:
// Input: nums = [3,1,5,8]
// Output: 167
// Explanation:
// nums = [3,1,5,8] --> [3,5,8] --> [3,8] --> [8] --> []
// coins =  3*1*5    +   3*5*8   +  1*3*8  + 1*8*1 = 167

// Example 2:
// Input: nums = [1,5]
// Output: 10

// Constraints:
// n == nums.length
// 1 <= n <= 300
// 0 <= nums[i] <= 100
/**
 * @param {number[]} nums
 * @return {number}
 * Time: O(n^3), there are n^2 sub problems for each number
 * Space: O(n^2), cache
 */
var maxCoins = function (nums) {
    // account for edge cases
    nums = [1, ...nums, 1];

    // memoization
    const cache = new Array(nums.length).fill().map(() => new Array(nums.length));

    function dfs(left, right) {
        if (left > right) {
            return 0;
        }
        // divide and conquer
        if (cache[left][right] == null) {
            let max = 0;
            for (let i = left; i <= right; i++) {
                // calculate max it can get by popping current ballon last
                const current = nums[left - 1] * nums[i] * nums[right + 1];
                // calculate max from left sub
                const leftSub = dfs(left, i - 1);
                // calculate max from right sub
                const rightSub = dfs(i + 1, right);
                // store max
                max = Math.max(max, current + leftSub + rightSub);
            }
            // memoize it
            cache[left][right] = max;
        }
        return cache[left][right];
    }

    return dfs(1, nums.length - 2)
};