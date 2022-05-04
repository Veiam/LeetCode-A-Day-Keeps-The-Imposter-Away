// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
// If target is not found in the array, return [-1, -1].
// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:
// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:
// Input: nums = [], target = 0
// Output: [-1,-1]

// Constraints:
// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
// nums is a non-decreasing array.
// -109 <= target <= 109

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * Time Complexity: O(n), indexOf searches target fromt the front and lastIndexOf searches target from the back
 * Space Complexity: O(1), no additional space is used
 */
const searchRange = function (nums, target) {
    return [nums.indexOf(target), nums.lastIndexOf(target)];
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * Time Compleixty: O(logn), binary search takes log n.
 * Space Complexity: O(1), constant space is used.
 */
var searchRange = function (nums, target) {
    function findBound(isFirst) {
        let begin = 0, end = nums.length - 1;
        while (begin <= end) {
            const mid = Math.floor((end + begin) / 2);
            const num = nums[mid];
            if (num === target) {
                // if we are looking for first occurent
                if (isFirst) {
                    // if mid is beginning or mid - 1 is not a target
                    if (mid === begin || (nums[mid - 1] !== target))
                        return mid;
                    end = mid - 1;
                }
                // else
                else {
                    // if mid is end or mid + 1 is not a target
                    if (mid === end || (nums[mid + 1] !== target))
                        return mid;
                    begin = mid + 1;
                }
            }
            // if num is bigger than target
            else if (num > target) {
                end = mid - 1;
            }
            // if num is less than target
            else {
                begin = mid + 1;
            }
        }
        // not found
        return -1;
    }
    let first = findBound(true);
    // if first occurence is not found, then there isn't a target in this array
    if (first === -1)
        return [-1, -1];
    return [first, findBound(false)];
};