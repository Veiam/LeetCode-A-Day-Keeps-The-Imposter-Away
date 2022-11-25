// Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:
// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.

// Example 1:
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true

// Example 2:
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false

// Constraints:
// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 100
// -104 <= matrix[i][j], target <= 104

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * Time complexity: O(logn) where n is number of cells in matrix
 * Space complexity: O(1), constant space
 */
var searchMatrix = function (matrix, target) {
    let left = 0, right = matrix[0].length * matrix.length - 1;
    // binary search
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        // find row and col
        let num = matrix[Math.floor(mid / matrix[0].length)][(mid % matrix[0].length)];

        if (num === target) {
            return true;
        }
        else if (num > target) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }
    return false;
};