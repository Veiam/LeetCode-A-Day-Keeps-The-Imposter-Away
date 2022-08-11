// There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.
// The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).
// The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.
// Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.

// Example 1:
// Input: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
// Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]

// Example 2:
// Input: heights = [[2,1],[1,2]]
// Output: [[0,0],[0,1],[1,0],[1,1]]

// Constraints:
// m == heights.length
// n == heights[r].length
// 1 <= m, n <= 200

/**
 * DFS
 * @param {number[][]} heights
 * @return {number[][]}
 * Time Compleixty: O(r * c)
 * Space Complexity: O(r * c)
 */
var pacificAtlantic = function (heights) {
    const atl = {}, pac = {};
    const rows = heights.length, cols = heights[0].length;
    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    for (let i = 0; i < rows; i++) {
        dfs(i, 0, pac, heights[i][0]);
        dfs(i, cols - 1, atl, heights[i][cols - 1]);
    }

    for (let j = 0; j < cols; j++) {
        dfs(0, j, pac, heights[0][j]);
        dfs(rows - 1, j, atl, heights[rows - 1][j]);
    }

    function dfs(r, c, visited, prevHeight) {
        const coord = r * cols + c;
        if (visited[coord] || r < 0 || c < 0 || r === rows || c === cols || heights[r][c] < prevHeight) {
            return;
        }
        visited[coord] = [r, c];
        for (const [x, y] of dirs) {
            dfs(r + x, y + c, visited, heights[r][c]);
        }

    }

    const res = [];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const coord = i * cols + j;
            if (atl[coord] && pac[coord]) {
                res.push([i, j]);
            }
        }
    }

    return res;
};

/**
 * BFS
 * @param {number[][]} heights
 * @return {number[][]}
 * Time Compleixty: O(r * c)
 * Space Complexity: O(r * c)
 */
var pacificAtlantic = function (heights) {
    const rows = heights.length, cols = heights[0].length;

    const atlQueue = [], pacQueue = [];
    for (let i = 0; i < rows; i++) {
        pacQueue.push([i, 0]);
        atlQueue.push([i, cols - 1]);
    }

    for (let j = 0; j < cols; j++) {
        pacQueue.push([0, j]);
        atlQueue.push([rows - 1, j]);
    }

    const atl = bfs(pacQueue);
    const pac = bfs(atlQueue);


    function bfs(queue) {
        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        const visited = new Array(rows).fill().map(() => new Array(cols).fill(false));
        while (queue.length) {
            const [r, c] = queue.shift()
            visited[r][c] = true
            for (const [x, y] of directions) {
                const newR = x + r;
                const newC = y + c;
                if (newR < 0 || newC < 0 || newR === rows || newC === cols || visited[newR][newC])
                    continue;
                if (heights[newR][newC] >= heights[r][c]) {
                    queue.push([newR, newC]);
                }
            }
        }
        return visited;
    }

    const res = [];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (atl[i][j] && pac[i][j]) {
                res.push([i, j]);
            }
        }
    }

    return res;
};