/**
 * Bottom-Up Tabulation
 * @param {number} n
 * @return {number}
 * Time Complexity: O(n), strating from n = 2, each number is visited once.
 * Space Complexity: O(n), we need space up to n to store numbers.
 */
const fib = function (n) {
    const dp = [0, 1];

    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};

/**
 * Iterative Bottom-Up
 * @param {number} n
 * @return {number}
 * Time Complexity: O(n), strating from n = 2, each number is visited once.
 * Space Complexity: O(1), we use constant spaces for res, prev1, and prev2.
 */
const fib = function (n) {
    if (n < 2)
        return n;
    let res = 0;
    let prev1 = 1;
    let prev2 = 0;
    for (let i = 2; i <= n; i++) {
        res = prev1 + prev2;
        [prev1, prev2] = [res, prev1];
    }
    return res;
};

/**
 * Binet's formulaS
 * @param {number} n
 * @return {number}
 * Time Complexity: O(logN), raising goldenRatio to n power requires logN time.
 * Space Complexity: O(1)
 */
var fib = function (n) {
    let goldenRatio = (1 + Math.sqrt(5)) / 2;
    return Math.round(Math.pow(goldenRatio, n) / Math.sqrt(5));
};