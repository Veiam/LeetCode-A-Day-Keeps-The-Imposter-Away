// Given an integer array nums that may contain duplicates, return all possible subsets (the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.

// Example 1:
// Input: nums = [1,2,2]
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]

// Example 2:
// Input: nums = [0]
// Output: [[],[0]]

// Constraints:
// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10

/**
 * @param {number[]} nums
 * @return {number[][]}
 * Time: O(nlogn + n*2^n)
 * Space: O(logn), sorting
 */
var subsetsWithDup = function (nums) {
    nums.sort();
    let res = [[]];
    let resSize = 0;
    for (let i = 0; i < nums.length; i++) {
        // if prev num is same as the current num
        // start the inner loop from previous result size
        let start = (i > 0 && nums[i] === nums[i - 1] ? resSize : 0);
        resSize = res.length;
        // cascadingly insert new subset by adding current number to existing subsets
        for (let j = start; j < resSize; j++) {
            res.push([...res[j], nums[i]]);
        }
    }
    return res;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 * Time: O(nlogn + n*2^n)
 * Space: O(n), recursion stack
 */
var subsetsWithDup = function (nums) {
    nums.sort((a, b) => a - b);
    const results = [];
    const result = [];

    function backtrack(index = 0) {
        results.push(result.slice());

        for (let i = index; i < nums.length; i++) {
            // if we already visited previous num in this loop, then skip
            if (i !== index && nums[i] === nums[i - 1]) {
                continue;
            }
            result.push(nums[i]);
            // backtrack
            backtrack(i + 1);
            result.pop();
        }
    }

    backtrack();
    return results;
};
