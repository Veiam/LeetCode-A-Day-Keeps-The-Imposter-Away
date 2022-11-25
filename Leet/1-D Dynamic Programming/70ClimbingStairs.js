// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// Constraints:
// 1 <= n <= 45

/**
 * @param {number} n
 * @return {number}
 * Time and Space Complexity: O(n), recursion can go up to n
 */
var climbStairs = function (n) {
    const memo = [];
    function climb(current) {
        // over stepped
        if (current > n)
            return 0;
        // found a way to reach the end
        if (current === n)
            return 1;

        // if not memoized, from current step, we can climb 1 or 2 step
        if (!memo[current]) {
            memo[current] = climb(current + 1) + climb(current + 2);
        }

        return memo[current];
    }

    return climb(0);
};

/**
 * @param {number} n
 * @return {number}
 * Time Complexity: O(n), we loop through up to n
 * Space Complexity: O(1), constant space is used
 */
var climbStairs = function (n) {
    if (n < 3) {
        return n;
    }
    const dp = [2, 1];

    for (let i = 3; i <= n; i++) {
        dp[i % 2] = dp[0] + dp[1];
    }

    return dp[n % 2]
};