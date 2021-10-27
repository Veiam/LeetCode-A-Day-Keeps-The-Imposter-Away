// Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.
// The distance between two adjacent cells is 1.

// Example 1:
// Input: mat = [[0,0,0],[0,1,0],[0,0,0]]
// Output: [[0,0,0],[0,1,0],[0,0,0]]

// Example 2
// Input: mat = [[0,0,0],[0,1,0],[1,1,1]]
// Output: [[0,0,0],[0,1,0],[1,2,1]]

// Constraints:
// m == mat.length
// n == mat[i].length
// 1 <= m, n <= 104
// 1 <= m * n <= 104
// mat[i][j] is either 0 or 1.
// There is at least one 0 in mat.

/**
 * BFS
 * @param {number[][]} mat
 * @return {number[][]}
 * Time complexity: O(row * col) We perform two passes over the matrix
 * and each pass requires O(row * col) time.
 * Space complexity: O(row * col) 
 * An additional O(row * col) space is required to maintain the queue.
 */
const updateMatrix = function (mat) {
    const row = mat.length, col = mat[0].length, queue = [];

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            // go through the matrix and find 0 positions
            if (mat[i][j] === 0) {
                queue.push([i, j]);
            }
            // else mark it as -Infinity
            else {
                mat[i][j] = -Infinity;
            }
        }
    }

    // direction helper array
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    let distance = 1;
    while (queue.length) {
        const length = queue.length;
        for (let i = 0; i < length; i++) {
            const [x, y] = queue.shift();
            for (const dir of dirs) {
                const newX = x + dir[0];
                const newY = y + dir[1];
                if (newX >= 0 && newY >= 0 && newX < row && newY < col) {
                    // if the cell is -Infinity, then we haven't visited the cell yet
                    if (mat[newX][newY] === -Infinity) {
                        // add it to the queue and set the cell's value to the current distance
                        queue.push([newX, newY]);
                        mat[newX][newY] = distance;
                    }
                }
            }
        }
        distance++;
    }
    return mat;
};