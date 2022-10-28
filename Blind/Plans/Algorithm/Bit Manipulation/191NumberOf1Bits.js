// Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

// Example 1:
// Input: n = 00000000000000000000000000001011
// Output: 3
// Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.

// Example 2:
// Input: n = 00000000000000000000000010000000
// Output: 1
// Explanation: The input binary string 00000000000000000000000010000000 has a total of one '1' bit.

// Example 3:
// Input: n = 11111111111111111111111111111101
// Output: 31
// Explanation: The input binary string 11111111111111111111111111111101 has a total of thirty one '1' bits.

// Constraints:
// The input must be a binary string of length 32.

/**
 * @param {number} n - a positive integer
 * @return {number}
 * Time Complexity: O(1), we know that the input is a binary string of length 32
 * So the time will be constant.
 * Space Complexity: O(1), constant space is used.
 */
const hammingWeight = function (n) {
    let num = 0;
    while (n >= 1) {
        // Check if the right most bit is 1
        if (n & 1 === 1)
            num++;
        n >>>= 1;
    }
    return num;
};

/**
 * @param {number} n - a positive integer
 * @return {number}
 * Time Complexity: O(1), we know that the input is a binary string of length 32
 * So the time will be constant.
 * Space Complexity: O(1), constant space is used.
 */
const hammingWeight = function (n) {
    let num = 0;
    while (n != 0) {
        num++;
        // Set the least significant bit to 0
        n &= (n - 1);
    }
    return num;
};