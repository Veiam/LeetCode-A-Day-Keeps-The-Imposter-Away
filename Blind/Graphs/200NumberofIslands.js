// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:
// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1

// Example 2:
// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3

// Constraints:
// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 300
// grid[i][j] is '0' or '1'.

/**
 * DFS
 * @param {character[][]} grid
 * @return {number}
 * Time Complexity: O(r * c), we visit each cell
 * Space Complexity: O(r * c), worst case we have to recurisvely look r * c times if every cell is filled with land
 */
var numIslands = function (grid) {
    const gridRows = grid.length, gridCols = grid[0].length;
    const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    let res = 0;
    for (let r = 0; r < gridRows; r++) {
        for (let c = 0; c < gridCols; c++) {
            if (grid[r][c] === '1') {
                look(r, c);
                res++;
            }
        }
    }


    function look(row, col) {
        if (row === gridRows || col === gridCols || row < 0 || col < 0) {
            return;
        }
        if (grid[row][col] === '0') {
            return;
        }

        grid[row][col] = '0';

        for (const [x, y] of dirs) {
            look(row + x, col + y);
        }
    }

    return res;
};

/**
 * BFS
 * @param {character[][]} grid
 * @return {number}
 * Time Complexity: O(r * c), we visit each cell
 * Space Complexity: O(min(r,c)), if grid is filled with lands queue can have up to min of r or c
 */
var numIslands = function (grid) {
    const gridRows = grid.length, gridCols = grid[0].length;
    const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    let res = 0;
    for (let r = 0; r < gridRows; r++) {
        for (let c = 0; c < gridCols; c++) {
            if (grid[r][c] === '1') {
                grid[r][c] = '0';
                const queue = [r * gridCols + c];
                res++;
                while (queue.length) {
                    const coords = queue.shift();
                    const row = Math.floor(coords / gridCols);
                    const col = coords % gridCols;
                    if (row - 1 >= 0 && grid[row - 1][col] == '1') {
                        queue.push((row - 1) * gridCols + col);
                        grid[row - 1][col] = '0';
                    }
                    if (row + 1 < gridRows && grid[row + 1][col] == '1') {
                        queue.push((row + 1) * gridCols + col);
                        grid[row + 1][col] = '0';
                    }
                    if (col - 1 >= 0 && grid[row][col - 1] == '1') {
                        queue.push(row * gridCols + col - 1);
                        grid[row][col - 1] = '0';
                    }
                    if (col + 1 < gridCols && grid[row][col + 1] == '1') {
                        queue.push(row * gridCols + col + 1);
                        grid[row][col + 1] = '0';
                    }
                }
            }
        }
    }

    return res;
};