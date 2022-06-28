// Given a circular integer array nums of length n, return the maximum possible sum of a non-empty subarray of nums.
// A circular array means the end of the array connects to the beginning of the array. Formally, the next element of nums[i] is nums[(i + 1) % n] and the previous element of nums[i] is nums[(i - 1 + n) % n].
// A subarray may only include each element of the fixed buffer nums at most once. Formally, for a subarray nums[i], nums[i + 1], ..., nums[j], there does not exist i <= k1, k2 <= j with k1 % n == k2 % n.

// Example 1:
// Input: nums = [1,-2,3,-2]
// Output: 3
// Explanation: Subarray [3] has maximum sum 3.

// Example 2:
// Input: nums = [5,-3,5]
// Output: 10
// Explanation: Subarray [5,5] has maximum sum 5 + 5 = 10.

// Example 3:
// Input: nums = [-3,-2,-3]
// Output: -2
// Explanation: Subarray [-2] has maximum sum -2.

// Constraints:
// n == nums.length
// 1 <= n <= 3 * 104
// -3 * 104 <= nums[i] <= 3 * 104
/**
 * @param {number[]} nums
 * @return {number}
 * Time complexity: O(n), one pass, we loop through each number once
 * Space complexity: O(1), constant space is used
 */
const maxSubarraySumCircular = function (nums) {
    let maxSub = nums[0], curMax = nums[0], minSub = nums[0], curMin = nums[0], total = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const cur = nums[i];
        // Kadane's algorithm
        curMax = cur + Math.max(0, curMax);
        maxSub = Math.max(curMax, maxSub);
        // Check if the max can be obtained circularly via a subarray containing the head and tail
        curMin = cur + Math.min(0, curMin);
        minSub = Math.min(curMin, minSub);
        total += cur;
    }

    // if maxSub is less than 0, it means total - minSub will be 0 (meaning all numbers were negative).
    return maxSub > 0 ? Math.max(maxSub, total - minSub) : maxSub;
};