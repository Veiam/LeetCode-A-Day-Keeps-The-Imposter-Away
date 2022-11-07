// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
// A subarray is a contiguous non-empty sequence of elements within an array.

// Example 1:
// Input: nums = [1,1,1], k = 2
// Output: 2

// Example 2:
// Input: nums = [1,2,3], k = 3
// Output: 2

// Constraints:
// 1 <= nums.length <= 2 * 104
// -1000 <= nums[i] <= 1000
// -107 <= k <= 107
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let map = { 0: 1 };
    let count = 0;
    nums.reduce((prev, cur, index) => {
        cur += prev;
        if (map[cur - k]) {
            count += map[cur - k];
        }

        if (map[cur] == null) {
            map[cur] = 0;
        }
        map[cur]++;
        return cur;
    }, 0)
    return count;
};