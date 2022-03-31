//In MATLAB, there is a handy function called reshape which can reshape an m x n matrix
// into a new one with a different size r x c keeping its original data.
// You are given an m x n matrix mat and two integers r and c representing the number of rows
// and the number of columns of the wanted reshaped matrix.
// The reshaped matrix should be filled with all the elements of the original matrix in the
// same row-traversing order as they were.
// If the reshape operation with given parameters is possible and legal, output the new reshaped matrix;
// Otherwise, output the original matrix.

// Example 1:
// Input: mat = [[1,2],[3,4]], r = 1, c = 4
// Output: [[1,2,3,4]]

// Example 2:
// Input: mat = [[1,2],[3,4]], r = 2, c = 4
// Output: [[1,2],[3,4]]

// Constraints:
// m == mat.length
// n == mat[i].length
// 1 <= m, n <= 100
// -1000 <= mat[i][j] <= 1000
// 1 <= r, c <= 300

/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 * Time Complexity: O(r * c), we are going through r * c number of loops
 * Space Complexity: O(r * c), we use r * c space to store a new arr/matrix
 */
const matrixReshape = function (mat, r, c) {
    // get row and col of matrix
    const matRow = mat.length;
    const matCol = mat[0].length;

    // if the cell numbers don't match return original
    if (matRow * matCol !== r * c) {
        return mat;
    }

    // create an arr to return
    const arr = Array(r).fill(0).map(() => Array(c).fill(0));

    let rows = 0, cols = 0;
    // go through matrix
    for (let i = 0; i < matRow; i++) {
        for (let j = 0; j < matCol; j++) {
            // store a num in new arr
            arr[rows][cols] = mat[i][j];
            cols++
            // if cols match the c, then reset cols and increase row
            if (cols == c) {
                rows++;
                cols = 0;
            }
        }
    }

    return arr;
};

/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 * Time Complexity: O(r * c), we are going through r * c number of loops
 * Space Complexity: O(r * c), we use r * c space to store a new arr/matrix
 */
const matrixReshape = function (mat, r, c) {
    const matRow = mat.length;
    const matCol = mat[0].length;


    if (matRow * matCol !== r * c) {
        return mat;
    }
    const arr = Array(r).fill(0).map(() => Array(c).fill(0));

    // for every time count matches the c, it means we have to move to the next row
    // so for row we can use count / c and for col we can use count % c
    let count = 0;
    for (let i = 0; i < matRow; i++) {
        for (let j = 0; j < matCol; j++) {
            arr[Math.floor(count / c)][count % c] = mat[i][j];
            count++;
        }
    }

    return arr;
};