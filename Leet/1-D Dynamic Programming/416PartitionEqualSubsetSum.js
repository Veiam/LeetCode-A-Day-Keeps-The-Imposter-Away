// Given a non-empty array nums containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.

// Example 1:
// Input: nums = [1,5,11,5]
// Output: true
// Explanation: The array can be partitioned as [1, 5, 5] and [11].

// Example 2:
// Input: nums = [1,2,3,5]
// Output: false
// Explanation: The array cannot be partitioned into equal sum subsets.

// Constraints:
// 1 <= nums.length <= 200
// 1 <= nums[i] <= 100

/**
 * @param {number[]} nums
 * @return {boolean}
 * Time and space: O(m * n), top down recursion
 */

var canPartition = function (nums) {
    const sum = nums.reduce((a, b) => a + b);
    if (sum % 2 !== 0)
        return false;

    const subSetSum = (sum >> 1);
    const memo = new Array((nums.length + 1)).fill().map(() => new Array((subSetSum + 1)).fill(null));

    function dfs(index, subSetSum) {
        if (subSetSum === 0)
            return true;

        if(index < 0 || subSetSum < 0){
            return false;
        }

        if(memo[index][subSetSum] == null){
            memo[index][subSetSum] = (dfs(index - 1, subSetSum - nums[index]) || dfs(index - 1, subSetSum));
        }
        return memo[index][subSetSum];
    }
    return dfs(nums.length - 1, subSetSum);/* Time O(N * M) | Space O(N * M) */
};
/**
 * @param {number[]} nums
 * @return {boolean}
 * Time: O(m * n), loop through total * nums
 * Space: O(m), dynamic prograaming array
 * Optimized bottom-up
 */
var canPartition = function (nums) {
    let total = nums.reduce((prev, cur) => prev + cur);

    // if total is odd, can't half it
    if (total % 2 === 1) {
        return false;
    }

    // half it
    total >>= 1;

    // initialize array 
    const dp = new Array(total + 1).fill(false);

    // base case
    dp[0] = true;
    // loop through nums
    for (let num of nums) {
        // loop backward to current num
        for (let i = total; i >= num; i--) {
            // current sum can be reached without current num
            // or it can reach it using a current sum
            dp[i] |= dp[i - num];
        }
    }


    return dp[total];
};