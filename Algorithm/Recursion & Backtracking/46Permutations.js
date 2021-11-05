// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

// Example 1:
// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// Example 2:
// Input: nums = [0,1]
// Output: [[0,1],[1,0]]

// Example 3:
// Input: nums = [1]
// Output: [[1]]

// Constraints:
// 1 <= nums.length <= 6
// -10 <= nums[i] <= 10
// All the integers of nums are unique.

/**
 * Recursion, backtrack
 * @param {number[]} nums
 * @return {number[][]}
 * ime complexity : O(∑(k=1 to N) P(N,k)) where P(N, k) = N!/(N - k)! = N (N - 1) ... (N - k + 1) is so-called k-permutations_of_n,
 * or partial permutation. Here first + 1 = k for the expression simplicity.
 * The formula is easy to understand : for each k (each first) one performs N(N - 1) ... (N - k + 1) operations,
 * and k is going through the range of values from 1 to N (and firstfirst from 0 to N−1).
 * Space complexity : O(N!) since one has to keep N! solutions.
 */
const permute = function (nums) {
    const res = [], len = nums.length;
    function backtrack(first) {
        // if we reached the end
        if (first == len) {
            // add the new permutation
            res.push(Array.from(nums));
        }
        // place i-th integer first in the current permutation
        for (let i = first; i < len; i++) {
            [nums[first], nums[i]] = [nums[i], nums[first]];
            // in here we don't use i + 1 since we want to use the next integer as first
            backtrack(first + 1);
            // backtrack
            [nums[first], nums[i]] = [nums[i], nums[first]];
        }

    }
    // initial call
    backtrack(0);

    return res;
};