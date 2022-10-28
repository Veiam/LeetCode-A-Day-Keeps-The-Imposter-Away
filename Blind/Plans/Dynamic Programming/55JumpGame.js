// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
// Return true if you can reach the last index, or false otherwise.

// Example 1:
// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

// Example 2:
// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

// Constraints:
// 1 <= nums.length <= 104
// 0 <= nums[i] <= 105

/**
 * Top-down
 * @param {number[]} nums
 * @return {boolean}
 * Time Complexity: O(n^2), for each element, we need to loop through its max jump distance to determine if it can reach the end
 * Space Complexity: O(n), for memoization
 */
const canJump = function (nums) {
    const memo = {};
    function jump(pos) {
        if (pos + nums[pos] >= nums.length - 1) {
            return true;
        }
        if (nums[pos] === 0) {
            return false;
        }

        if (typeof memo[pos] === 'undefined') {
            let res = false;
            for (let i = 1; i <= nums[pos]; i++) {
                res = jump(pos + i);
                if (res) {
                    return true;
                }
            }
            memo[pos] = false;
        }
        return false;
    }

    return jump(0);
};

/**
 * Bottom-up
 * @param {number[]} nums
 * @return {boolean}
 * Time Complexity: O(n^2), for each element, we need to loop through its max jump distance to determine if it can reach the end
 * Space Complexity: O(n), for memoization
 */
const canJump = function (nums) {
    const dp = new Array(nums.length);
    dp[nums.length - 1] = true;

    for (let i = nums.length - 2; i >= 0; i--) {
        const maxDistance = Math.min(nums.length - 1, nums[i] + i);
        for (let j = 1; j <= maxDistance; j++) {
            if (dp[j] === true) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[0] === true ? true : false;
};

/**
 * Bottom-up
 * @param {number[]} nums
 * @return {boolean}
 * Time Complexity: O(n), we loop through each element once
 * Space Complexity: O(1), constant space
 */
const canJump = function (nums) {
    // initialize last good position to last index
    let lastGoodPos = nums.length - 1;
    // loop through nums backward
    for (let i = lastGoodPos; i >= 0; i--) {
        // if our current pos + its max jump distance can reach the last good position,
        // this means current position is also a good position
        if (i + nums[i] >= lastGoodPos) {
            // update the position
            lastGoodPos = i;
        }
    }
    // if first element is a good position, then it can reach the end
    return lastGoodPos === 0;
};