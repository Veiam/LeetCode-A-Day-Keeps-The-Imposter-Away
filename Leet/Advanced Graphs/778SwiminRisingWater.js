// You are given an n x n integer matrix grid where each value grid[i][j] represents the elevation at that point (i, j).
// The rain starts to fall. At time t, the depth of the water everywhere is t. You can swim from a square to another 4-directionally adjacent square if and only if the elevation of both squares individually are at most t. You can swim infinite distances in zero time. Of course, you must stay within the boundaries of the grid during your swim.
// Return the least time until you can reach the bottom right square (n - 1, n - 1) if you start at the top left square (0, 0).

// Example 1:
// Input: grid = [[0,2],[1,3]]
// Output: 3
// Explanation:
// At time 0, you are in grid location (0, 0).
// You cannot go anywhere else because 4-directionally adjacent neighbors have a higher elevation than t = 0.
// You cannot reach point (1, 1) until time 3.
// When the depth of water is 3, we can swim anywhere inside the grid.

// Example 2:
// Input: grid = [[0,1,2,3,4],[24,23,22,21,5],[12,13,14,15,16],[11,17,18,19,20],[10,9,8,7,6]]
// Output: 16
// Explanation: The final route is shown.
// We need to wait until time 16 so that (0, 0) and (4, 4) are connected.

// Constraints:
// n == grid.length
// n == grid[i].length
// 1 <= n <= 50
// 0 <= grid[i][j] < n2
// Each value grid[i][j] is unique.
/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function (grid) {
    const row = grid.length;
    const col = grid[0].length;
    let start = new MinPriorityQueue();
    let res = 0;
    let dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    start.enqueue([0, 0], grid[0][0]);
    while (start.size) {
        const [x, y] = start.dequeue().element;
        res = Math.max(res, grid[x][y]);

        if (x === row - 1 && y === col - 1) {
            return res;
        }
        grid[x][y] = null;
        for (let [r, c] of dirs) {
            if (x + r >= 0 && x + r < row && y + c >= 0 && y + c < col && grid[x + r][y + c] != null) {
                start.enqueue([x + r, y + c], grid[x + r][y + c]);
            }
        }
    }
};