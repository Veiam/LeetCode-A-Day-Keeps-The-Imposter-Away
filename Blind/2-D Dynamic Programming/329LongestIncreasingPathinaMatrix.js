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
 * Time: O(r*c)
 * Space: O(r*c)
 */
var longestIncreasingPath = function (matrix) {
    let longest = 1;
    const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    const max = new Array(matrix.length).fill().map(() => new Array(matrix[0].length).fill(0));
    // loop through and recursively explore each cell
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            explore(i, j, -1, 1);
        }
    }

    function explore(x, y, prev, count) {
        // check if it's a legal cell
        if (x < 0 || y < 0 || x >= matrix.length || y >= matrix[0].length) {
            return;
        }
        // check if we've visited this place before or
        // if it's worth travelling through
        if (matrix[x][y] <= prev || max[x][y] >= count) {
            return;
        }
        // memoize it and update the longest
        max[x][y] = count;
        longest = Math.max(longest, count);
        // look through its neighbors
        for (let [r, c] of dirs) {
            explore(r + x, y + c, matrix[x][y], count + 1);
        }

    }
    return longest;
};
