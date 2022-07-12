// Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".
// The testcases will be generated such that the answer is unique.
// A substring is a contiguous sequence of characters within the string.

// Example 1:
// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

// Example 2:
// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.

// Example 3:
// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.

// Constraints:
// m == s.length
// n == t.length
// 1 <= m, n <= 105
// s and t consist of uppercase and lowercase English letters.

// Follow up: Could you find an algorithm that runs in O(m + n) time?

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 * Time Complexity: O(S + T)
 * Space Complexity: O(S + T)
 */
var minWindow = function (s, t) {
    // Base condition
    if (s.length < t.length || s.length === 0 || t.length === 0) {
        return "";
    }

    // map and window of char and counts
    const map = {};
    const window = {};

    // build a map and empty window
    let need = 0;
    for (let c of t) {
        if (!(c in map)) {
            map[c] = 0;
            window[c] = 0;
            // need here is equal to unique chars in string
            need++;
        }
        map[c]++;
    }


    // res[0] = distance, res[1] = left, res[2] = right
    let res = [s.length + t.length, 0, 0], left = 0;
    // loop through
    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        // if char is in map
        if (char in map) {
            // increase the window char count
            window[char]++;
            // if it meets the requirement
            if (window[char] === map[char])
                // reduce the needed unique char
                need--;
        }

        // loop until we no longer meet the requirement
        while (need === 0 && left <= right) {
            // check if current window is shorter than saved substring length
            if (res[0] > (right - left + 1)) {
                res[0] = right - left + 1;
                res[1] = left;
                res[2] = right + 1;
            }
            const c = s[left];
            if (c in map) {
                window[c]--;
                // if we don't meet requirement anymore
                // increse the needed unique char
                if (window[c] < map[c]) {
                    need++;
                }
            }
            left++;
        }
    }
    return res[0] > s.length ? "" : s.substring(res[1], res[2]);
};