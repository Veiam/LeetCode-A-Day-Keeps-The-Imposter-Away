// Given an m x n integers matrix, return the length of the longest increasing path in matrix.
// From each cell, you can either move in four directions: left, right, up, or down. You may not move diagonally or move outside the boundary (i.e., wrap-around is not allowed).

// Example 1:
// Input: matrix = [[9,9,4],[6,6,8],[2,1,1]]
// Output: 4
// Explanation: The longest increasing path is [1, 2, 6, 9].

// Example 2:
// Input: matrix = [[3,4,5],[3,2,6],[2,2,1]]
// Output: 4
// Explanation: The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.

// Example 3:
// Input: matrix = [[1]]
// Output: 1

// Constraints:
// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 200
// 0 <= matrix[i][j] <= 231 - 1
/**
 * @param {number[][]} matrix
 * @return {number}
 * Time and space: O(mn)
 */
var longestIncreasingPath = function (matrix) {
    const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const memo = new Array(matrix.length).fill().map(() => new Array(matrix[0].length).fill(0));

    let res = 0;
    // loop through
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            res = Math.max(res, explore(i, j));
        }
    }

    function explore(x, y) {
        if (memo[x][y] != 0) {
            return memo[x][y];
        }
        for (let [r, c] of dirs) {
            r += x;
            c += y;
            // check if next cell is valid and greater than current cell
            if (r >= 0 && c >= 0 && r < matrix.length && c < matrix[0].length && matrix[r][c] > matrix[x][y])
                // update memoization if we found a new max
                memo[x][y] = Math.max(memo[x][y], explore(r, c));
        }
        // increase memo[x][y] by 1 to account for current cell
        return ++memo[x][y];
    }
    return res;
};