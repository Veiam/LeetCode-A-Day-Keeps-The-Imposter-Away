// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:
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
 * Time Complexity: O(log mn) where m is length of matrix row and n is legnth of matrix col.
 * Space Complexity: O(1), constant space is used.
 */
const searchMatrix = function (matrix, target) {
    const row = matrix.length, col = matrix[0].length;
    let start = 0, end = (row * col) - 1;
    // binary search
    while (start <= end) {
        // get the mid
        let mid = Math.floor(start + (end - start)/ 2);
        // mid / col will gives us a row index
        // mid & col will gives us a col index
        // above works because mid = (row index * col length) + col index
        let midNum = matrix[Math.floor(mid / col)][mid % col];

        // found a match
        if (midNum === target)
            return true;
        // target is bigger
        else if (midNum < target)
            start = mid + 1;
        // target is smaller
        else
            end = mid - 1;
    }
    // none found
    return false;
};