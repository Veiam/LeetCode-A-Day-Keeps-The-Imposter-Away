// You are given an m x n grid rooms initialized with these three possible values.
// -1 A wall or an obstacle.
// 0 A gate.
// INF Infinity means an empty room. We use the value 231 - 1 = 2147483647 to represent INF as you may assume that the distance to a gate is less than 2147483647.
// Fill each empty room with the distance to its nearest gate. If it is impossible to reach a gate, it should be filled with INF.

// Example 1:
// Input: rooms = [[2147483647,-1,0,2147483647],[2147483647,2147483647,2147483647,-1],[2147483647,-1,2147483647,-1],[0,-1,2147483647,2147483647]]
// Output: [[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,4]]

// Example 2:
// Input: rooms = [[-1]]
// Output: [[-1]]

// Constraints:
// m == rooms.length
// n == rooms[i].length
// 1 <= m, n <= 250
// rooms[i][j] is -1, 0, or 231 - 1.

/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 * Time and Space: O(r * c), at most, we visit each cell once
 */
var wallsAndGates = function (rooms) {
    const gates = [];
    // find all the gates
    for (let i = 0; i < rooms.length; i++) {
        for (let j = 0; j < rooms[0].length; j++) {
            if (rooms[i][j] === 0) {
                gates.push([i, j]);
            }
        }
    }

    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    // bfs
    while (gates.length) {
        const [r, c] = gates.shift();
        const prev = rooms[r][c];
        // loop thourgh 4 directions
        for (const [x, y] of dirs) {
            let row = r + x;
            let col = c + y;
            // we only care about empty room
            if (row < 0 || col < 0 || row >= rooms.length || col >= rooms[0].length || rooms[row][col] !== 2147483647) {
                continue;
            }
            // current distance to gate would be previous + 1
            rooms[row][col] = prev + 1;
            gates.push([row, col]);
        }
    }
};