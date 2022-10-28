// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:
// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * Time Complexity: O(n), where n is number of nums.
 * Space Complexity: O(n), where n is number of nums.
 */
const twoSum = function (nums, target) {
    const map = {};

    for (let i = 0; i < nums.length; i++) {
        // find a required pair
        const pair = target - nums[i];
        // if it already exists, then return it
        if (pair in map)
            return [map[pair], i];
        // if not store it
        map[nums[i]] = i;
    }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * Time Complexity: O(n), where n is number of nums.
 * Space Complexity: O(n), where n is number of nums.
 */
const twoSum = function (nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        // find a required pair
        const pair = target - nums[i];
        // if it already exists, then return it
        if (map.has(pair))
            return [map.get(pair), i];
        // if not store it
        map.set(nums[i], i);
    }
};