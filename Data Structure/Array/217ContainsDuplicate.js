// Given an integer array nums, return true if any value appears at least twice in the array,
// and return false if every element is distinct.

// Example 1:
// Input: nums = [1, 2, 3, 1]
// Output: true

// Example 2:
// Input: nums = [1, 2, 3, 4]
// Output: false

// Example 3:
// Input: nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
// Output: true

// Constraints:
// 1 <= nums.length <= 105
// - 109 <= nums[i] <= 109

/**
 * Object/Map
 * @param {number[]} nums
 * @return {boolean}
 * Time Complexity: O(n) where n is numbers in nums.
 * Space Complexity: O(n) where n is numbers in nums.
 */
const containsDuplicate = function (nums) {
    const map = {};
    for (let num of nums) {
        // If the num already exists
        // then there is a duplicate
        if (num in map)
            return true;
        // If not, add it to the map
        map[num] = num;
    }
    return false;
};

/**
 * Set
 * @param {number[]} nums
 * @return {boolean}
 * Time Complexity: O(n) where n is numbers in nums.
 * Space Complexity: O(n) where n is numbers in nums.
 */
const containsDuplicate = function (nums) {
    const set = new Set(nums);
    // set can only store unique value
    // so if their size/length do not match
    // then it means there is a duplicate
    return set.size !== nums.length;
    // could be one liner
    // return nums.length !== new Set(nums).size;
};