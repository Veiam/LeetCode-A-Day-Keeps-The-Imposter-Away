// // Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:
// Input: s = "leetcode"
// Output: 0

// Example 2:
// Input: s = "loveleetcode"
// Output: 2

// Example 3:
// Input: s = "aabb"
// Output: -1

// Constraints:
// 1 <= s.length <= 105
// s consists of only lowercase English letters.

/**
 * @param {string} s
 * @return {number}
 * Time Complexity: O(n), we are going through the s length twice so 2n
 * Spae Complexity: O(1), alphabet only contaisn 26 characters
 */
const firstUniqChar = function (s) {
    const obj = {};
    for (let i = 0; i < s.length; i++) {
        // make hashmap of s
        if (!(s[i] in obj))
            obj[s[i]] = 0;
        obj[s[i]]++;
    }

    for (let i = 0; i < s.length; i++) {
        // check if the character count is 1
        if (s[i] in obj && obj[s[i]] === 1) {
            return i;
        }
    }
    return -1;
};

/**
 * @param {string} s
 * @return {number}
 * Time Complexity: O(n^2), worst case
 * Spae Complexity: O(1), no extra space is used
 */
 const firstUniqChar = function(s) {
    for(let i = 0; i < s.length; i++){
        if(s.indexOf(s[i]) === s.lastIndexOf(s[i]))
            return i;
    }
    return -1;
};