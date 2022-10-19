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

/**
 * @param {number[][]} matrix
 * @return {number}
 * Time and space: O(mn)
 * topological sort, peeling onions
 */
var longestIncreasingPath = function (matrix) {
    const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const rows = matrix.length;
    const cols = matrix[0].length;
    const neighbors = new Array(rows).fill().map(() => new Array(cols));
    const indegrees = new Array(rows).fill().map(() => new Array(cols));

    // loop through cells and find indegrees and its valid neighbors
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const cell = matrix[i][j];
            if (neighbors[i][j] == null) {
                neighbors[i][j] = [];
                indegrees[i][j] = 0;
            }
            for (let [x, y] of dirs) {
                x += i;
                y += j;
                if (x >= 0 && y >= 0 && x < rows && y < cols && matrix[x][y] > cell) {
                    if (neighbors[x][y] == null) {
                        neighbors[x][y] = [];
                        indegrees[x][y] = 0;
                    }
                    indegrees[x][y]++;
                    neighbors[i][j].push([x, y]);
                }
            }
        }
    }

    // find all cells with 0 indegrees
    const lowest = [];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (indegrees[i][j] === 0) {
                lowest.push([i, j]);
            }
        }
    }

    // loop through 0 indegrees cell and find new 0 indegrees cell
    let res = 0;
    while (lowest.length) {
        const len = lowest.length;
        for (let i = 0; i < len; i++) {
            const [x, y] = lowest.shift();
            for (let [r, c] of neighbors[x][y]) {
                indegrees[r][c]--;
                if (indegrees[r][c] === 0) {
                    lowest.push([r, c]);
                }
            }
        }
        res++;
    }

    return res;
};