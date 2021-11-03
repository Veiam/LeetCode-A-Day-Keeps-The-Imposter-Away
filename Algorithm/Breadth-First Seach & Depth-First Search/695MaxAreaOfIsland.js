// You are given an m x n binary matrix grid. An island is a group of 1's (representing land)
// connected 4-directionally (horizontal or vertical.)
// You may assume all four edges of the grid are surrounded by water.
// The area of an island is the number of cells with a value 1 in the island.
// Return the maximum area of an island in grid. If there is no island, return 0.

// Example 1:
// Input: grid = [
// [0,0,1,0,0,0,0,1,0,0,0,0,0],
// [0,0,0,0,0,0,0,1,1,1,0,0,0],
// [0,1,1,0,1,0,0,0,0,0,0,0,0],
// [0,1,0,0,1,1,0,0,1,0,1,0,0],
// [0,1,0,0,1,1,0,0,1,1,1,0,0],
// [0,0,0,0,0,0,0,0,0,0,1,0,0],
// [0,0,0,0,0,0,0,1,1,1,0,0,0],
// [0,0,0,0,0,0,0,1,1,0,0,0,0]
// ]
// Output: 6
// Explanation: The answer is not 11, because the island must be connected 4-directionally.

// Example 2:
// Input: grid = [[0,0,0,0,0,0,0,0]]
// Output: 0

// Constraints:
// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 50
// grid[i][j] is either 0 or 1.

/**
 * DFS
 * @param {number[][]} grid
 * @return {number}
 * Time Complexity: O(R*C), where R is the number of rows in the given grid, and C is the number of columns. We visit every square once.
 * Space complexity: O(1), we perform in-place replacement so it's a constant space.
 */
const maxAreaOfIsland = function (grid) {
    // dfs recursive
    function dfs(x, y) {
        // if it's not a valid land
        if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length || grid[x][y] === 0)
            return 0;
        // mark visited land
        grid[x][y] = 0;
        // return land area
        return (1 + dfs(x - 1, y) + dfs(x + 1, y) + dfs(x, y - 1) + dfs(x, y + 1));
    }

    let max = 0;
    // go through the grid
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (grid[r][c] === 1)
                max = Math.max(max, dfs(r, c));
        }
    }

    return max;
};

/**
 * BFS
 * @param {number[][]} grid
 * @return {number}
 * Time Complexity: O(R*C), where R is the number of rows in the given grid, and C is the number of columns. We visit every square once.
 * Space complexity: O(N), where N is the size of the queue. 
 */
const maxAreaOfIsland = function (grid) {
    // bfs iterative
    function bfs(i, j) {
        let area = 0;
        // queue and down, up, right, left
        const queue = [[i, j]], dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        // mark it visited
        grid[i][j] = 0;
        // while queue contains something
        while (queue.length) {
            // increase area
            area++;
            // get the position
            const [x, y] = queue.shift();
            for (const dir of dirs) {
                // iterate and get new position
                const r = dir[0] + x;
                const c = dir[1] + y;
                // if it's a valid land
                if (r >= 0 && r < grid.length && c >= 0 && c < grid[0].length && grid[r][c] === 1) {
                    // mark it as visited
                    grid[r][c] = 0;
                    // push it to the 
                    queue.push([r, c]);
                }
            }
        }
        // return the size of current island
        return area;
    }

    let max = 0;
    // go through the grid
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1)
                max = Math.max(max, bfs(i, j));
        }
    }

    return max;
};
