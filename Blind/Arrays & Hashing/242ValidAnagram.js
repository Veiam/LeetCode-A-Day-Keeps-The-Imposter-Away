// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

// Constraints:
// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * Time Complexity: O(s+t)
 * Space Complexity: O(s)
 */
var isAnagram = function (s, t) {
    // base case, if length don't match
    if (s.length !== t.length)
        return false;

    const map = {};
    // build a map of char freq
    for (let char of s) {
        if (!(char in map)) {
            map[char] = 0;
        }
        map[char]++;
    }

    // go through second char
    for (let char of t) {
        // if char is in the map
        if (char in map) {
            // reduce the count
            map[char]--;
            // delete the char if the count is 0
            if (map[char] === 0) {
                delete (map[char]);
            }
        }
        // if not found, then they are not anagram
        else
            return false;
    }

    // map length must be 0 if they are anagram
    return Object.keys(map).length === 0;
};