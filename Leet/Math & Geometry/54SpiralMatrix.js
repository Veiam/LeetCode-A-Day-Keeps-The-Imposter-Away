// Given an m x n matrix, return all elements of the matrix in spiral order.

// Example 1:
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]

// Example 2:
// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

// Constraints:
// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 10
// -100 <= matrix[i][j] <= 100

/**
 * @param {number[][]} matrix
 * @return {number[]}
 * Time Complexity: O(n), we visit each cell onec
 * Space Complexity: O(n), store every cell
 */
var spiralOrder = function (matrix) {
    let res = [], row = 0, col = -1, dir = 1;
    let numRows = matrix.length, numCols = matrix[0].length;
    while (numRows * numCols) {
        // move right and left
        for (let i = 0; i < numCols; i++) {
            col += dir;
            res.push(matrix[row][col]);
        }
        numCols--;
        // move down and up
        for (let j = 0; j < numRows - 1; j++) {
            row += dir;
            res.push(matrix[row][col]);
        }
        numRows--;
        // flip the direction
        dir *= -1;
    }

    return res;
};