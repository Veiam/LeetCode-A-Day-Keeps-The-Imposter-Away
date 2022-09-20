// Given an integer array nums of unique elements, return all possible subsets (the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.

// Example 1:
// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

// Example 2:
// Input: nums = [0]
// Output: [[],[0]]

// Constraints:
// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10
// All the numbers of nums are unique.

/**
 * @param {number[]} nums
 * @return {number[][]}
 * Time: O(n * 2^n), generate all subsets and copy them into output list
 * Space: O(n), recursive stack and subset
 */
var subsets = function (nums) {
    let res = [];
    let subset = [];
    function backtrack(index) {
        // if we reached the end
        if (index >= nums.length) {
            // add a copy to the result
            res.push(subset.slice());
            return;
        }
        // push the current index
        subset.push(nums[index]);
        backtrack(index + 1);

        // pop and backtrack
        subset.pop();
        backtrack(index + 1);
    }
    backtrack(0);
    return res;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 * Time: O(n * 2^n), generate all subsets and copy them into output list
 * Space: O(1), constant space
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    // start with empty result
    let res = [[]];
    for (let num of nums) {
        let len = res.length;
        // create a new subset by adding current number to existing subsets
        for (let subset of res) {
            res.push([...subset, num]);
            len--;
            if (len === 0)
                break;
        }
    }
    return res;
};