// Given two integers a and b, return the sum of the two integers without using the operators + and -.

// Example 1:
// Input: a = 1, b = 2
// Output: 3

// Example 2:
// Input: a = 2, b = 3
// Output: 5

// Constraints:
// -1000 <= a, b <= 1000
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 * Time Complexity: O(1), constraints on how many bits there can be
 * Space Complexity: O(1), constant space
 */
var getSum = function (a, b) {
    while (b) {
        // carry over 1
        let temp = (a & b) << 1;
        // add
        a = a ^ b;
        // update b
        b = temp;
    }
    // return res
    return a;
};
