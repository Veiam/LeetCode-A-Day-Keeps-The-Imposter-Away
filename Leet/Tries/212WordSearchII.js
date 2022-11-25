// Given an m x n board of characters and a list of strings words, return all words on the board.
// Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

// Example 1:
// Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
// Output: ["eat","oath"]

// Example 2:
// Input: board = [["a","b"],["c","d"]], words = ["abcb"]
// Output: []

// Constraints:
// m == board.length
// n == board[i].length
// 1 <= m, n <= 12
// board[i][j] is a lowercase English letter.
// 1 <= words.length <= 3 * 104
// 1 <= words[i].length <= 10
// words[i] consists of lowercase English letters.
// All the strings of words are unique.

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 * Time Complexity: O(N * 4 * 3^(L-1)) where N is total number of cells in the board and L is maximum length of word.
 * Initially every cell can travel up to its 4 neighboring cells in worst case, then it can travel up to its 3 neighboring cells afterword repeately
 * until it reaches the maximum length of word.
 * Space Complexity: O(M), where M is total number of letters in trie
 */
var findWords = function (board, words) {

    // construct trie
    const trie = {};
    // for every words
    for (const word of words) {
        // grab a trie
        let root = trie;
        // for every chars
        for (const char of word) {
            // set the char in current trienode
            root[char] = root[char] || {};
            // move the trie node
            root = root[char];
            // increase the count of prefix frequency
            root.count = root.count + 1 || 1;

        }
        // set the word
        root.word = word;
    }

    // number of rows and cols in board 
    const boardRows = board.length, boardCols = board[0].length;
    // to help calculate neighboring cells
    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    // for ever cell, use backtrack functions to find words
    const res = [];
    for (let i = 0; i < boardRows; i++) {
        for (let j = 0; j < boardCols; j++) {
            if (trie[board[i][j]]) {
                backtrack(i, j, trie);
            }
        }
    }

    return res;

    function backtrack(row, col, node) {
        // check if it's a valid cell
        if (row >= 0 && col >= 0 && row < boardRows && col < boardCols) {
            // store the current cell value and update it to blank to signify that we have been here already
            const cell = board[row][col];
            board[row][col] = ' ';
            // if char exists in trie node
            if (node[cell]) {
                // move the trie node
                node = node[cell];
                // if it's a word
                if (node.word) {
                    // store the word and push it to the res
                    const word = node.word;
                    res.push(word);
                    // delete the node.word so we don't get a duplicate
                    delete node.word;
                    // remove the frequency of char appearance by 1 in trie node
                    let root = trie;
                    for (const char of word) {
                        root[char].count--;
                        // if frequency is 0 then remove the trie node
                        if (root[char].count === 0) {
                            delete root[char];
                            break;
                        }
                        root = root[char];
                    }
                }
                // traverse to neighboring cells
                for (const dir of dirs) {
                    backtrack(row + dir[0], col + dir[1], node);
                }
            }
            // restore the cell value
            board[row][col] = cell;
        }
    }
};