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
 * Top down, memoization
 * @param {number} n
 * @return {number}
 * Time complexity : O(n). Size of recursion tree can go upto n.
 * Space complexity : O(n). The depth of recursion tree can go upto n.
 */
const climbStairs = function (n) {
    // create an array to store n + 1
    const memoize = [];

    function recursive(n) {
        if (n <= 1)
            return 1;

        // if not memoized, memoize it
        if (typeof memoize[n] === 'undefined') {
            memoize[n] = recursive(n - 1) + recursive(n - 2);
        }
        return memoize[n];
    }

    return recursive(n);
};

/**
 * Bottom up, DP
 * @param {number} n
 * @return {number}
 * Time complexity : O(n). Single loop upto n.
 * Space complexity : O(n). dp array of size n is used.
 */
const climbStairs = function (n) {
    if (n === 1) {
        return 1;
    }

    // initial set up
    const dp = new Array(n + 1);
    dp[1] = 1;
    dp[2] = 2;

    // dp[i] = dp[i-1] + dp[i-2]
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    // last index contains the answer
    return dp[dp.length];
};

/**
 * Fibonacci Number
 * @param {number} n
 * @return {number}
 * Time complexity : O(n). Single loop uptonn is required to calculate n^th fibonacci number.
 * Space complexity : O(1). Constant space is used.
 */
const climbStairs = function (n) {
    if (n === 1) {
        return 1;
    }

    let first = 1, second = 2;

    // same as the dp above but without the array
    for (let i = 3; i <= n; i++) {
        const third = first + second;
        [first, second] = [second, third];
    }

    // second index contains the answer
    return second;
};

/**
 * Fibonacci Formula
 * @param {number} n
 * @return {number}
 * Time complexity : O(logn). powpow method takes log n time.
 * Space complexity : O(1). Constant space is used.
 */
const climbStairs = function (n) {
    // Quadratic formula
    const sqrt = Math.sqrt(5), fibn = Math.pow((1 + sqrt) / 2, n + 1) - Math.pow((1 - sqrt) / 2, n + 1);
    return fibn / sqrt;
};