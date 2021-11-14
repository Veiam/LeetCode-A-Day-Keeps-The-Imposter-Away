// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

// Constraints:
// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * Time Complexity: O(m + n), where m is the length of s and n is the length of t.
 * Space Complexity: O(1), constant space to hold up to 26 lowercase alphabets.
 */
const isAnagram = function (s, t) {
    if (s.length !== t.length)
        return false;
    const chars = {};
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        // make hashmap of char
        if (!(char in chars))
            chars[char] = 0;
        chars[char]++;
    }

    for (let i = 0; i < t.length; i++) {
        const char = t[i];
        // check if char is in map
        if (char in chars && chars[char] > 0) {
            chars[char]--;
        }
        else
            return false;

    }
    return true;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * Time Complexity: O(mlogm + nlogn), where m is the length of s and n is the length of t. sort takes log time.
 * Space Complexity: O(1), constance space is used.
 */
const isAnagram = function (s, t) {
    return s.split('').sort().join('') == t.split('').sort().join('');
};