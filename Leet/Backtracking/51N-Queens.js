// The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.
// Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.
// Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.

// Example 1:
// Input: n = 4
// Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
// Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above

// Example 2:
// Input: n = 1
// Output: [["Q"]]

// Constraints:
// 1 <= n <= 9

/**
 * @param {number} n
 * @return {string[][]}
 * Time: O(N!), every time we place a queen, we get one less possibility to check
 * Space: O(N^2), to set up a board
 */
var solveNQueens = function (n) {
    let col = new Set();
    let posDiag = new Set();
    let negDiag = new Set();

    // set up a board
    let board = new Array(n).fill().map(() => new Array(n).fill('.'));
    let res = [];

    function backtrack(r) {
        // if we placed all the queens
        if (r === n) {
            let temp = [];
            // loop through current board and add the row
            for (let row of board) {
                temp.push(row.join(''));
            }

            res.push(temp);
            return;
        }

        // loop through
        for (let c = 0; c < n; c++) {
            // check if queen has been already placed diagonally or in current column
            if (col.has(c) || posDiag.has(r + c) || negDiag.has(r - c)) {
                continue;
            }

            // add current queen
            col.add(c);
            posDiag.add(r + c);
            negDiag.add(r - c);
            board[r][c] = 'Q';

            // backtrack
            backtrack(r + 1);

            col.delete(c);
            posDiag.delete(r + c);
            negDiag.delete(r - c);
            board[r][c] = '.';
        }
    }
    backtrack(0);
    return res;
};