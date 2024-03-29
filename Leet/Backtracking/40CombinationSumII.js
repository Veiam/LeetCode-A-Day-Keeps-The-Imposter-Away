// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.
// Each number in candidates may only be used once in the combination.
// Note: The solution set must not contain duplicate combinations.

// Example 1:
// Input: candidates = [10,1,2,7,6,1,5], target = 8
// Output: 
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]

// Example 2:
// Input: candidates = [2,5,2,1,2], target = 5
// Output: 
// [
// [1,2,2],
// [5]
// ]

// Constraints:
// 1 <= candidates.length <= 100
// 1 <= candidates[i] <= 50
// 1 <= target <= 30

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * Time: O(2^n), worst case if all numbers are unique
 * Space: O(n), recusion stack
 */
var combinationSum2 = function (candidates, target) {
    candidates.sort((a, b) => a - b);

    let res = [];
    let combination = [];

    function backtrack(index, sum) {
        // if current sum equals the target
        if (sum === target) {
            res.push(combination.slice());
            return;
        }
        // loop through
        for (let i = index; i < candidates.length; i++) {
            if (i !== index && candidates[i] === candidates[i - 1]) {
                continue;
            }

            const cur = candidates[i];
            combination.push(cur);
            // only if we haven't gone over the target
            if (sum + cur <= target) {
                backtrack(i + 1, sum + cur);
                combination.pop();
            }
            // break out early if we are over the target
            else {
                combination.pop();
                break;
            }
        }
    }

    backtrack(0, 0);

    return res;
};