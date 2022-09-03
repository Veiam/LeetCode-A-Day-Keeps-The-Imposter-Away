// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
// In other words, return true if one of s1's permutations is the substring of s2.

// Example 1:
// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").

// Example 2:
// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false

// Constraints:
// 1 <= s1.length, s2.length <= 104
// s1 and s2 consist of lowercase English letters.

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 * Time complexity: O(s1 + (s2 - s1))
 * Space complexity: O(1), max size of sub is always 26
 */
var checkInclusion = function (s1, s2) {
    const sub = {};
    let remaining = 0;

    // loop through and build a freq map of s1 chars
    for (let char of s1) {
        if (!(char in sub)) {
            sub[char] = 0;
            remaining++;
        }
        sub[char]++;
    }

    // sliding windows
    let left = 0, right = 0;
    while (right < s2.length) {
        let char = s2[right];

        // if char exists
        if (char in sub) {
            // decrease and reduce remaining that we need to find
            sub[char]--;
            if (sub[char] === 0) {
                remaining--;
            }
        }
        // increase window
        right++;
        // if remaining is at 0
        while (remaining === 0) {
            // if the length matches, then we found it
            if (right - left === s1.length) {
                return true;
            }
            char = s2[left];
            // return found char
            if (char in sub) {
                sub[char]++;
                if (sub[char] === 1) {
                    remaining++;
                }
            }
            // shrink window
            left++;
        }
    }

    return false;
};

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 * Time complexity: O(s1 + (s2 - s1))
 * Space complexity: O(1), max size of freq1 and 2 are always 26
 */
var checkInclusion = function (s1, s2) {
    const freq1 = new Array(26).fill(0);
    const freq2 = new Array(26).fill(0);

    const len = s1.length;
    // build an intial frequency map of s1 and s2 up to s1 length
    let aCharCode = 'a'.charCodeAt(0);
    for (let i = 0; i < len; i++) {
        freq1[s1.charCodeAt(i) - aCharCode]++;
        freq2[s2.charCodeAt(i) - aCharCode]++;
    }

    let count = 0;
    // count all the matching freq
    for (let i = 0; i < 26; i++) {
        if (freq1[i] === freq2[i]) {
            count++;
        }
    }

    // loop through
    let left = 0, right = len;

    while (right < s2.length) {
        // if all freq matches, then permutation is found
        if (count === 26) {
            return true;
        }


        let char = s2.charCodeAt(right) - aCharCode;
        // increase char freq
        freq2[char]++;
        // if freq matches, increase count
        if (freq2[char] === freq1[char]) {
            count++;
        } else if (freq2[char] - 1 === freq1[char]) {
            count--;
        }

        right++;

        // decrease char freq
        char = s2.charCodeAt(left) - aCharCode;
        freq2[char]--;
        if (freq2[char] + 1 === freq1[char]) {
            count--;
        } else if (freq2[char] === freq1[char]) {
            count++;
        }
        left++;
    }
    return count === 26;
};