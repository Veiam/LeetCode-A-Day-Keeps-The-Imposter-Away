// You are given an m x n grid where each cell can have one of three values:
// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.
// Return the minimum number of minutes that must elapse until no cell has a fresh orange.
// If this is impossible, return -1.

// Example 1:
// Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
// Output: 4

// Example 2:
// Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
// Output: -1
// Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.

// Example 3:
// Input: grid = [[0,2]]
// Output: 0
// Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.

// Constraints:
// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 10
// grid[i][j] is 0, 1, or 2.

/**
 * BFS
 * @param {number[][]} grid
 * @return {number}
 * Time Complexity: O(N), where N is the size of the grid.
 * Space Complexity: O(N), where N is the size of the grid.
 */
const orangesRotting = function (grid) {
    // row, col, and queue initialization
    const row = grid.length, col = grid[0].length, queue = [];
    // keep track of orange counts and minute passed by
    // since our first pass is rotten oranges only, minute is initalized to -1
    let oranges = 0, minute = -1;

    // go through the grid and store rotten orange positions in the queue
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            // if any orange(rotten or fresh) is found, increase the orange count
            if (grid[i][j] === 2) {
                queue.push([i, j]);
                oranges++;
            }
            else if (grid[i][j] === 1) {
                oranges++;
            }
        }
    }

    // if orange count is 0, then we return 0
    if (oranges === 0) {
        return 0;
    }

    // direction helper array
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    // while queue is not empty
    while (queue.length) {
        const length = queue.length;
        for (let i = 0; i < length; i++) {
            const [x, y] = queue.shift();
            for (const dir of dirs) {
                const newX = x + dir[0];
                const newY = y + dir[1];
                // if we find a fresh orange, then rotten it and add it to the queue
                if (newX >= 0 && newY >= 0 && newX < row && newY < col && grid[newX][newY] === 1) {
                    queue.push([newX, newY]);
                    grid[newX][newY] = 2;
                }
            }
            // decrease the orange count
            oranges--;
        }
        // increase the minute
        minute++
    }
    // if all oranges are rotten then return minute, else return -1
    return oranges === 0 ? minute : -1;
};