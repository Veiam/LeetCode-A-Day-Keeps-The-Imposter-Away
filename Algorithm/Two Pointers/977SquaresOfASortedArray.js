// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Example 1:
// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

// Example 2:
// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

// Constraints:
// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in non-decreasing order.

/**
 * @param {number[]} nums
 * @return {number[]}
 * Time Complexity: O(N), where N is the length of nums.
 * Space Complexity: O(N) if you take output into account and O(1) otherwise. 
 */
const sortedSquares = function (nums) {
    let start = 0, end = nums.length - 1;

    const res = [];
    while (res.length !== nums.length) {
        // compare absolute value
        if (Math.abs(nums[start]) >= Math.abs(nums[end])) {
            // unshift the bigger number to new array
            res.unshift(nums[start] * nums[start]);
            start++;
        }
        else {
            res.unshift(nums[end] * nums[end]);
            end--;
        }
    }
    return res;
};