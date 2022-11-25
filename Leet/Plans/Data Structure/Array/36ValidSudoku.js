// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:
// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

// Example 1:
// Input: board = 
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true

// Example 2:
// Input: board = 
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8.
// Since there are two 8's in the top left 3x3 sub-box, it is invalid.

// Constraints:
// board.length == 9
// board[i].length == 9
// board[i][j] is a digit 1-9 or '.'.

/**
 * @param {character[][]} board
 * @return {boolean}
 * Time Complexity: O(m * n) where m is 9 and n is 9 since that's a length of the sudoku board 9x9.
 * So this could be considered O(1) or O(n^2)
 * Space Complexity: Same cases as above. O(m * n) where m is 9 and n is 9 since that's a length of the sudoku board 9x9.
 * So this could be considered O(1) or O(n^2)
 */
const isValidSudoku = function (board) {
    const rows = {};
    const cols = {};
    const boxes = {};

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            const val = board[r][c];

            if (val === ".")
                continue;

            if (!rows[r]) {
                rows[r] = new Set();
            }

            if (rows[r].has(val)) {
                return false;
            }
            rows[r].add(val);

            if (!cols[c]) {
                cols[c] = new Set();
            }

            if (cols[c].has(val)) {
                return false;
            }
            cols[c].add(val);

            const index = Math.floor(r / 3) * 3 + Math.floor(c / 3);
            if (!boxes[index]) {
                boxes[index] = new Set();
            }

            if (boxes[index].has(val)) {
                return false;
            }
            boxes[index].add(val);
        }
    }
    return true;
};

/**
 * Same as the abovebut initialize storages from the start.
 * @param {character[][]} board
 * @return {boolean}
 */
 const isValidSudoku = function(board) {
    const rows = {}, cols = {}, boards = {};
    
    for(let i = 0; i < 9; i++){
        rows[i] = new Set();
        cols[i] = new Set();
        boards[i] = new Set();
    }
    
    for(let row = 0; row < 9; row++){
        for(let col = 0; col < 9; col++){
            const cell = board[row][col];
            
            if( cell === '.')
                continue;
            
            if(rows[row].has(cell)){
                return false;
            }
            rows[row].add(cell);
            
            if(cols[col].has(cell)){
                return false;
            }
            cols[col].add(cell);
            
            const square = Math.floor(row/3) *3 + Math.floor(col/3);
            if(boards[square].has(cell)){
                return false;
            }
            boards[square].add(cell);
            
        }
    }
    
    return true;
};

