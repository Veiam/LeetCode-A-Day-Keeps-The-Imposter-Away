// Given an integer array nums, return the length of the longest strictly increasing subsequence.
// A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].

// Example 1:
// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

// Example 2:
// Input: nums = [0,1,0,3,2,3]
// Output: 4

// Example 3:
// Input: nums = [7,7,7,7,7,7,7]
// Output: 1
// Constraints:
// 1 <= nums.length <= 2500
// -104 <= nums[i] <= 104

// Follow up: Can you come up with an algorithm that runs in O(n log(n)) time complexity?

/**
 * Dynamic Programming
 * @param {number[]} nums
 * @return {number}
 * Time Complexity: O(n^2), inner loop
 * Space Complexity: O(n),
 */
var lengthOfLIS = function (nums) {
    // Base case
    const dp = new Array(nums.length).fill(1);
    for (let i = nums.length - 1; i >= 0; i--) {
        const num = nums[i];
        for (let j = i - 1; j >= 0; j--) {
            // we found a num less than current one
            if (nums[j] < num) {
                // see if we can find a new max
                dp[j] = Math.max(dp[j], dp[i] + 1);
            }
        }
    }
    return Math.max(...dp);
};

/**
 * Algorithm with binary search
 * @param {number[]} nums
 * @return {number}
 * Time Complexity: O(n log n), loop through nums and binary search
 * Space Complexity: O(n)
 */
var lengthOfLIS = function (nums) {
    const sub = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];
        let len = sub.length;
        // if it's bigger than our current biggest num, add to the end
        if (num > sub[len - 1]) {
            sub.push(num);
        } else {
            // if not, find a correct place for it and replace it with binary serach
            let left = 0, right = len - 1;
            let mid = Math.floor((left + right) / 2);
            while (left < right) {
                if (sub[mid] == num) {
                    break;
                }
                // we don't do mid - 1 because sub[mid] can be the smallest element that is also greater than our num
                if (sub[mid] > num) {
                    right = mid;
                }
                else if (sub[mid] < num) {
                    left = mid + 1;
                }
                mid = Math.floor((left + right) / 2);
            }
            sub[mid] = num;
        }
    }

    return sub.length;
};