// There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.
// Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.
// The test cases are generated so that the answer will be less than or equal to 2 * 109.

// Example 1:
// Input: m = 3, n = 7
// Output: 28

// Example 2:
// Input: m = 3, n = 2
// Output: 3
// Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Down -> Down
// 2. Down -> Down -> Right
// 3. Down -> Right -> Down

// Constraints:
// 1 <= m, n <= 100

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * Time Complexity: O(m * n), we visit each cell once
 * Space Complexity: O(m * n)
 */
var uniquePaths = function (m, n) {
    // base case
    const dp = new Array(m).fill(1).map(() => new Array(n).fill(1));
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            // num of ways to get to current cell is sum of ways to get to top and left
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    // return bottom right
    return dp[m - 1][n - 1];
};

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * Time Complexity: O(m * n), we visit each cell once
 * Space Complexity: O(n), we only need two rows with width of n.
 */
var uniquePaths = function (m, n) {
    const dp = new Array(2).fill(1).map(() => new Array(n).fill(1));
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i % 2][j] = dp[(i - 1) % 2][j] + dp[i % 2][j - 1];
        }
    }
    return dp[(m - 1) % 2][n - 1];
};