// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

// Example 1:Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[1] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

// Example 2:
// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.

// Example 3:
// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

// Constraints:
// 3 <= nums.length <= 3000
// -105 <= nums[i] <= 105

/**
 * @param {number[]} nums
 * @return {number[][]}
 * Time Complexity: O(n^2), O(nlogn) for sorting and O(n^2) for inner loop
 * Space Complexity: O(logn), for sorted array
 */
var threeSum = function (nums) {
    // sort array to utilize two pointers
    nums.sort((a, b) => a - b);
    const res = [];

    // loop through nums
    for (let left = 0; left < nums.length - 2; left++) {
        // if previous left is same as current left, move on
        if (left > 0 && nums[left - 1] === nums[left]) {
            continue;
        }

        // set two pointers
        let mid = left + 1, right = nums.length - 1;
        // find two sum
        while (mid < right) {
            const threeSum = nums[left] + nums[mid] + nums[right];
            if (threeSum > 0) {
                right--;
            }
            else {
                if (threeSum === 0) {
                    res.push([nums[left], nums[mid], nums[right]]);
                }
                mid++;
                // previus mid shouldn't match the current mid
                while (nums[mid - 1] === nums[mid])
                    mid++;
            }

        }
    }
    return res;
};