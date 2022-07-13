// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:
// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
// Given the sorted rotated array nums of unique elements, return the minimum element of this array.
// You must write an algorithm that runs in O(log n) time.

// Example 1:
// Input: nums = [3,4,5,1,2]
// Output: 1
// Explanation: The original array was [1,2,3,4,5] rotated 3 times.

// Example 2:
// Input: nums = [4,5,6,7,0,1,2]
// Output: 0
// Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.

// Example 3:
// Input: nums = [11,13,15,17]
// Output: 11
// Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 

// Constraints:
// n == nums.length
// 1 <= n <= 5000
// -5000 <= nums[i] <= 5000
// All the integers of nums are unique.
// nums is sorted and rotated between 1 and n times.

/**
 * @param {number[]} nums
 * @return {number}
 * Time complexity: O(logn), binary search
 * Space complexity: O(1), constant space is used
 */
var findMin = function (nums) {
    let left = 0, right = nums.length - 1;
    // base case, no rotation or length is 1 then first index is lowest
    if (nums[left] < nums[right] || nums.length === 1) {
        return nums[left];
    }

    // binary search
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const num = nums[mid];

        // check if current num is lowest
        if (num < nums[mid - 1]) {
            return num;
        }
        // check if the next num is lowest
        else if (num > nums[mid + 1]) {
            return nums[mid + 1];
        }
        // before lowest
        else if (nums[left] <= num) {
            left = mid + 1;
        }
        // after lowest
        else {
            right = mid - 1;
        }
    }
};