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
 * Space Complexity: O(1), we use constant spaces of 2 elements in the array
 */
const fib = function (n) {
    // this can be omitted
    if(n <=  1)
        return n;
    
    const seq = [0, 1];
    for(let i = 2; i <= n; i++){
        seq[i%2] = seq[0] + seq[1];
    }
    return seq[n%2];
};

/**
 * Binet's formulaS
 * @param {number} n
 * @return {number}
 * Time Complexity: O(logN), raising goldenRatio to n power requires logN time.
 * Space Complexity: O(1)
 */
const fib = function (n) {
    let goldenRatio = (1 + Math.sqrt(5)) / 2;
    return Math.round(Math.pow(goldenRatio, n) / Math.sqrt(5));
};