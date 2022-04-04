// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

// Example 2:
// Input: numRows = 1
// Output: [[1]]

// Constraints:
// 1 <= numRows <= 30

/**
 * DP
 * @param {number} numRows
 * @return {number[][]}
 * Time Complexity: O(n^2) outerloops runs numRows time while innerloop runs row!
 * Space Complexity: O(n^2), need a space to store every update
 */
const generate = function (numRows) {
    // return array
    const arr = [];
    // first row will always be 1
    arr.push([1]);

    for (let row = 1; row < numRows; row++) {
        const curRow = [];
        // get the previous row
        const prevRow = arr[row - 1];
        // starts with 1 
        curRow.push(1);

        // calculate middle cells
        for (let col = 1; col < row; col++) {
            curRow.push(prevRow[col - 1] + prevRow[col]);
        }
        // ends with 1
        curRow.push(1);

        // add cur row to result array
        arr.push(curRow);
    }
    return arr;
};