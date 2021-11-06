// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed,
// the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and
// it will automatically contact the police if two adjacent houses were broken into on the same night.
// Given an integer array nums representing the amount of money of each house, return the maximum amount of money
// you can rob tonight without alerting the police.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.

// Example 2:
// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12.

// Constraints:
// 1 <= nums.length <= 100
// 0 <= nums[i] <= 400

/**
 * Top down, recursion
 * @param {number[]} nums
 * @return {number}
 * Time Complexity: O(N) since we process at most N recursive calls, thanks to caching, and during each of these calls,
 * we make an O(1) computation which is simply making two other recursive calls, finding their maximum,
 * and populating the cache based on that.
 * Space Complexity: O(N) which is occupied by the cache and also by the recursion stack.
 */
const rob = function (nums) {
    // fill it with -1 to help with comparison
    const memoize = new Array(nums.length).fill(-1);

    function recursive(pos) {
        if (pos >= nums.length)
            return 0;

        // if not memoized, memoize it
        if (memoize[pos] === -1) {
            // we can either skip the house or take the house and move on to pos + 2
            memoize[pos] = Math.max(recursive(pos + 1), recursive(pos + 2) + nums[pos]);
        }
        return memoize[pos];
    }

    return recursive(0);
};

/**
 * Bottom up, tabulation
 * @param {number[]} nums
 * @return {number}
 * Time Complexity: O(N) since we have a loop from N−2 to 0 and we use the precalculated values of our dynamic programming table to
 * calculate the current value in the table which is a constant time operation.
 * Space Complexity: O(1) since we are not using a table to store our values.
 * Simply using two variables will suffice for our calculations.
 */
const rob = function (nums) {
    const len = nums.length;
    // special cases
    if (len <= 1)
        return len === 1 ? nums[0] : 0;

    // reverse of top down pos + 1 and pos + 2
    let next = nums[len - 1], nextPlusOne = 0;
    for (let i = len - 2; i >= 0; i--) {
        // either go to next one OR rob and add it to current
        const current = Math.max(next, nextPlusOne + nums[i]);
        [nextPlusOne, next] = [next, current];
    }

    // next holds a current which is max
    return next;
};