// You are given an integer array nums and an integer target.
// You want to build an expression out of nums by adding one of the symbols '+' and '-' before each integer in nums and then concatenate all the integers.
// For example, if nums = [2, 1], you can add a '+' before 2 and a '-' before 1 and concatenate them to build the expression "+2-1".
// Return the number of different expressions that you can build, which evaluates to target.

// Example 1:
// Input: nums = [1,1,1,1,1], target = 3
// Output: 5
// Explanation: There are 5 ways to assign symbols to make the sum of nums be target 3.
// -1 + 1 + 1 + 1 + 1 = 3
// +1 - 1 + 1 + 1 + 1 = 3
// +1 + 1 - 1 + 1 + 1 = 3
// +1 + 1 + 1 - 1 + 1 = 3
// +1 + 1 + 1 + 1 - 1 = 3

// Example 2:
// Input: nums = [1], target = 1
// Output: 1

// Constraints:
// 1 <= nums.length <= 20
// 0 <= nums[i] <= 1000
// 0 <= sum(nums[i]) <= 1000
// -1000 <= target <= 1000
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * Top-down
 * Time and Space: O(n * t)
 */
var findTargetSumWays = function (nums, target) {
    const dp = new Array(nums.length + 1).fill().map(() => new Array(Math.abs(target) + 1).fill(null));
    // recursive top-down
    function helper(index, sum) {
        if (index < 0) {
            if (sum === target) {
                return 1;
            }
            return 0;
        }
        if (dp[index][sum] == null) {
            dp[index][sum] = helper(index - 1, sum + nums[index]) + helper(index - 1, sum - nums[index]);
        }
        return dp[index][sum];
    }
    return helper(nums.length - 1, 0);


};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * Bottom-up
 * Time: O(t * n)
 * Space: O(t)
 */
var findTargetSumWays = function (nums, target) {
    // find total
    let total = nums.reduce((a, b) => a + b);
    // if we can't reach the target with total then we can't reach it at all
    if (Math.abs(target) > Math.abs(total))
        return 0;

    // get an array of total * 2 + 1 to account for -total to total
    let dp = new Array((total << 1) + 1).fill(0);

    // base case
    dp[total - nums[0]] = 1;
    dp[total + nums[0]] += 1;

    // loop through numbs from index 1
    for (let i = 1; i < nums.length; i++) {
        // temp storage since we are using 1d array solution
        const next = new Array((total << 1) + 1).fill(0);
        // loop through -total to total
        for (let j = -total; j <= total; j++) {
            // see if currnet total can be touched by subtracting or adding current num
            next[j + total] += dp[j + total + nums[i]] || 0;
            next[j + total] += dp[j + total - nums[i]] || 0;
        }
        // overwrite the dp
        dp = next;
    }
    // return res
    return dp[total + target];
};