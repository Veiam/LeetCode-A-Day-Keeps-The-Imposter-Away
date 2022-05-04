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
 * Time Complexity: O(logn), where n is number of cells
 * Space Complexity: O(1), constant space is used
 */
 const searchMatrix = function(matrix, target) {
    // turn 2d matrix to 1d
    let left = 0, right = matrix.length * matrix[0].length - 1;
    // binary search
    while(left <= right){
        const center = Math.floor((right+left) /2);
        // using divide and remainder gives us row and col
        const val = matrix[Math.floor(center / matrix[0].length)][center % matrix[0].length];
        if(val === target){
            return true;
        }
        else if(val > target){
            right = center - 1;
        }
        else{
            left = center + 1;
        }
    }
    return false;
};