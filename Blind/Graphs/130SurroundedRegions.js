// Given an m x n matrix board containing 'X' and 'O', capture all regions that are 4-directionally surrounded by 'X'.
// A region is captured by flipping all 'O's into 'X's in that surrounded region.

// Example 1:
// Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
// Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
// Explanation: Notice that an 'O' should not be flipped if:
// - It is on the border, or
// - It is adjacent to an 'O' that should not be flipped.
// The bottom 'O' is on the border, so it is not flipped.
// The other three 'O' form a surrounded region, so they are flipped.

// Example 2:
// Input: board = [["X"]]
// Output: [["X"]]

// Constraints:
// m == board.length
// n == board[i].length
// 1 <= m, n <= 200
// board[i][j] is 'X' or 'O'.
/**
 * DFS
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 * Time and Space: O(r * c)
 */
var solve = function (board) {
    const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    for (let r = 0; r < board.length; r++) {
        if (board[r][0] === "O") {
            dfs(r, 0);
        }
        if (board[r][board[0].length - 1] === "O") {
            dfs(r, board[0].length - 1);
        }
    }

    for (let c = 0; c < board[0].length; c++) {
        if (board[0][c] === "O") {
            dfs(0, c);
        }
        if (board[board.length - 1][c] === "O") {
            dfs(board.length - 1, c);
        }
    }

    function dfs(r, c) {
        if (r < 0 || c < 0 || r >= board.length || c >= board[0].length || board[r][c] !== "O") {
            return;
        }

        board[r][c] = "V";

        for (const [x, y] of dirs) {
            dfs(x + r, y + c);
        }
    }

    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board[0].length; c++) {
            if (board[r][c] !== "V") {
                board[r][c] = "X";
            } else {
                board[r][c] = "O"
            }
        }
    }
};

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 * Time and Space: O(r * c)
 */
var solve = function (board) {
    const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    for (let r = 0; r < board.length; r++) {
        if (board[r][0] === "O") {
            bfs(r, 0);
        }
        if (board[r][board[0].length - 1] === "O") {
            bfs(r, board[0].length - 1);
        }
    }

    for (let c = 0; c < board[0].length; c++) {
        if (board[0][c] === "O") {
            bfs(0, c);
        }
        if (board[board.length - 1][c] === "O") {
            bfs(board.length - 1, c);
        }
    }

    function bfs(r, c) {
        const queue = [[r, c]];

        while (queue.length) {
            const [x, y] = queue.shift();
            if (x < 0 || y < 0 || x >= board.length || y >= board[0].length || board[x][y] !== "O") {
                continue;
            }
            board[x][y] = "V";
            for (let [dX, dY] of dirs) {
                queue.push([x + dX, y + dY]);
            }
        }
    }

    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board[0].length; c++) {
            if (board[r][c] !== "V") {
                board[r][c] = "X";
            } else {
                board[r][c] = "O"
            }
        }
    }
};