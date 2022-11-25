// A message containing letters from A-Z can be encoded into numbers using the following mapping:
// 'A' -> "1"
// 'B' -> "2"
// ...
// 'Z' -> "26"
// To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, "11106" can be mapped into:
// "AAJF" with the grouping (1 1 10 6)
// "KJF" with the grouping (11 10 6)
// Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F' since "6" is different from "06".
// Given a string s containing only digits, return the number of ways to decode it.
// The test cases are generated so that the answer fits in a 32-bit integer.

// Example 1:
// Input: s = "12"
// Output: 2
// Explanation: "12" could be decoded as "AB" (1 2) or "L" (12).

// Example 2:
// Input: s = "226"
// Output: 3
// Explanation: "226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).

// Example 3:
// Input: s = "06"
// Output: 0
// Explanation: "06" cannot be mapped to "F" because of the leading zero ("6" is different from "06").

// Constraints:
// 1 <= s.length <= 100
// s contains only digits and may contain leading zero(s).

/**
 * @param {string} s
 * @return {number}
 * Time and space complexity: O(n), recursive
 */
var numDecodings = function (s) {
    const len = s.length;
    const memo = [];
    // Recursive with memoization
    function decode(index) {
        // if we already saved it, return it
        if (memo[index]) {
            return memo[index];
        }

        // if we have nothing left to process
        if (index == len) {
            return 1;
        }

        // if current index is 0, can't continue
        if (s[index] == 0) {
            return 0;
        }

        // if we reached the end
        if (index == len - 1) {
            return 1;
        }

        // single
        let ways = decode(index + 1);
        // double
        if (s.substring(index, index + 2) <= 26) {
            ways += decode(index + 2);
        }
        // save and return
        memo[index] = ways;
        return ways;
    }

    return decode(0);
};

/**
 * @param {string} s
 * @return {number}
 * Time complexity: O(n), we go through each digit
 * Space complexity: O(1), constant space
 */
var numDecodings = function (s) {
    if (s[0] == 0) {
        return 0;
    }

    // Iterative with constant space
    let twoBack = 1;
    let oneBack = 1;

    // Start from 1
    for (let i = 1; i < s.length; i++) {
        let current = 0;
        // if it's not 0, then single digit is valid
        if (s[i] != 0) {
            current = oneBack;
        }
        // calcualte if double digit is valid
        const str = s.substring(i - 1, i + 1);
        if (str <= 26 && str >= 10) {
            current += twoBack;
        }

        // save results
        twoBack = oneBack;
        oneBack = current;
    }

    return oneBack;
};