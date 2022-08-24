// Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.
// The test cases are generated so that the answer will fit in a 32-bit integer.
// A subarray is a contiguous subsequence of the array.

// Example 1:
// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.

// Example 2:
// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

// Constraints:
// 1 <= nums.length <= 2 * 104
// -10 <= nums[i] <= 10
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

/**
 * @param {number[]} nums
 * @return {number}
 * Time complexity: O(n), we iterate through nums once
 * Space complexit: O(1), constant space
 */
var maxProduct = function (nums) {
    // base case
    let res = nums[0];
    let curMin = nums[0];
    let curMax = nums[0];
    // loop from 1
    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];
        // find a new current max
        const temp = Math.max(num, num * curMin, num * curMax);
        // find a new min
        curMin = Math.min(num, num * curMin, num * curMax);
        // overwrite current max
        curMax = temp;
        // see if we found new max
        res = Math.max(res, curMax);
    }

    return max;
}