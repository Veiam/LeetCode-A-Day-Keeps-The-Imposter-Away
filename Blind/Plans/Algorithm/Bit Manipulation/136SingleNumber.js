// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:
// Input: nums = [2,2,1]
// Output: 1

// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4

// Example 3:
// Input: nums = [1]
// Output: 1

// Constraints:
// 1 <= nums.length <= 3 * 104
// -3 * 104 <= nums[i] <= 3 * 104
// Each element in the array appears twice except for one element which appears only once.

/**
 * @param {number[]} nums
 * @return {number}
 * Time complexity : O(n). We only iterate through nums, so the time complexity is the number of elements in nums.
 * Space complexity : O(1).
 */
const singleNumber = function (nums) {
    // If we XOR same number, we get 0.
    // By XOR'ing all num in nums, we can find a missing number.
    return nums.reduce((prev, cur) => prev ^ cur);
};

/**
 * @param {number[]} nums
 * @return {number}
 * Time complexity : O(n). We only iterate through nums, so the time complexity is the number of elements in nums.
 * Space complexity : O(1).
 */
 const singleNumber = function(nums) {
    let answer = nums[0];
    for(let i = 1; i < nums.length; i++){
        answer ^=  nums[i];
    }
    return answer;
};