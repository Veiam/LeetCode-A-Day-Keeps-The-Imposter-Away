// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Constraints:
// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

/**
 * @param {string} s
 * @return {number}
 * Time Complexity: O(n), loop through each char
 * Space Complexity: O(n), we will store each unique char in map
 */
var lengthOfLongestSubstring = function (s) {
    // Sliding window with map
    const map = {};
    let res = 0, left = 0;

    // loop through
    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        // current char already exists, see if we need to slide
        if (char in map) {
            left = Math.max(map[char], left);
        }
        // calculate the current window
        res = Math.max(res, right - left + 1);
        // update the map, we want it to be right + 1 since that should be the new left
        // not including the current char if we run into it again
        map[char] = right + 1;
    }

    return res;
};