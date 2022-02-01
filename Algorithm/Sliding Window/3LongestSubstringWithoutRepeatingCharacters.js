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

// Example 4:
// Input: s = ""
// Output: 0

// Constraints:
// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

/**
 * @param {string} s
 * @return {number}
 * Time complexity : O(n), where n is the length of s.
 * Space complexity : O(n), where n is the size of map.
 */
const lengthOfLongestSubstring = function (s) {
    // start and end of window, max value, and map
    let start = 0, end = 0, max = 0, collection = new Map();
    // until we slide the windodw to the end
    while (end < s.length) {
        // if it already exists
        if (collection.has(s[end])) {
            // we set the start to end only if it it's
            // after the current start
            start = Math.max(collection.get(s[end]), start);
        }
        // store the chracter in end + 1
        collection.set(s[end], end + 1);
        // figure out the max
        max = Math.max(end - start + 1, max);
        // move the end
        end++;
    }
    // return max
    return max;
};


/**
 * @param {string} s
 * @return {number}
 * Time complexity : O(n), where n is the length of s.
 * Space complexity : O(n), where n is the size of map.
 */
 const lengthOfLongestSubstring = function (s) {
    let max = 0, map = {};
    for(let left = 0, right = 0; right < s.length; right++){
        // if the current char is in the map
        if(s[right] in map){
            // move the window
            left = Math.max(map[s[right]], left);
        }
        // get the max
        max = Math.max(max, right - left + 1);
        // set currnet char's position in the map
        map[s[right]] = right + 1;
    }
    return max;
};