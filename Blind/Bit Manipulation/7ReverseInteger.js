// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321

// Example 3:
// Input: x = 120
// Output: 21

// Constraints:
// -231 <= x <= 231 - 1
/**
 * @param {number} x
 * @return {number}
 * Time: O(logx), there is about log x amount of digits
 * Space: O(1), constant space
 */
var reverse = function (x) {
    let max = 2 ** 31 - 1;
    let min = -(2 ** 31);
    let res = 0;
    while (x !== 0) {
        // get the right most digit
        let rightMost = x % 10;
        // remove the right most digit from the number
        x = (x - rightMost) / 10;
        // add it to the result
        res = (10 * res) + rightMost;
        // see if it is out of bound
        if ((res > max) || (res < min)) {
            return 0;
        }
    }
    return res;
};