// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums.
// If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// Example 2:
// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1


// Constraints:
// 1 <= nums.length <= 104
// -104 < nums[i], target < 104
// All the integers in nums are unique.
// nums is sorted in ascending order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 
 * Time complexity : O(logn).
 * The search space is halved each time, so the time complexity is O(logn).
 * Space complexity : O(1).
 */
const search = function (nums, target) {
    // set low index and high index
    let low = 0, high = nums.length - 1;

    while (low <= high) {
        // find mid point between low and high index
        const mid = Math.floor(low + (high - low) / 2);

        // if match is found, return the index
        if (nums[mid] === target) {
            return mid;
        }

        // if the num is bigger than target then we need to look for
        // a smaller value
        else if (nums[mid] > target) {
            high = mid - 1;
        }

        // else the num is smaller than target then we need to look for
        // a bigger value
        else {
            low = mid + 1;
        }
    }

    // no match found
    return -1;
};
