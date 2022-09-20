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
 * @param {number[]} nums
 * @return {number[][]}
 * Time: O(k=1 to n of P(n,k) where P(n,k) = n!/(n-k)!)
 * Space: O(n!), recursive stack
 */
var permute = function (nums) {
    let res = [];
    function backtrack(start) {
        // add if we reached the end
        if (start >= nums.length) {
            res.push(nums.slice());
        }
        // loop through from starting index
        for (let i = index; i < nums.length; i++) {
            // swap starting index with current index
            [nums[start], nums[i]] = [nums[i], nums[start]];
            // backtrack
            backtrack(index + 1);
            [nums[start], nums[i]] = [nums[i], nums[start]];
        }
    }
    backtrack(0);
    return res;
};


/**
 * @param {number[]} nums
 * @return {number[][]}
 * Time: O(k=1 to n of P(n,k) where P(n,k) = n!/(n-k)!)
 * Space: O(n!), recursive stack
 */
var permute = function (nums) {
    let res = [];

    if (nums.length === 1) {
        return [nums.slice()];
    }

    // loop through nums
    for (let i = 0; i < nums.length; i++) {
        let num = nums.shift();

        // get permutations of remaining
        let perms = permute(nums);

        // for each permutations, add removed number
        for (let perm of perms) {
            perm.push(num);
        }
        // push it to the result
        res.push(...perms);
        // add back removed number
        nums.push(num);
    }
    return res;
};