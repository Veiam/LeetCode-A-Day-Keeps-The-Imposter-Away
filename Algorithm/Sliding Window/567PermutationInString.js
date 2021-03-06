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
 * Time complexity: O(l1 + (l2 - l1), where l1 is the length of string and l2 is the length of pattern.
 * Space complexity: O(1). Constant space is used.
 */
const checkInclusion = function (s1, s2) {
    // if pattern is longer than string
    if (s1.length > s2.length)
        return false;

    const pattern = new Map();
    // if s does not exist, set it to 1 else increase it by 1
    for (let s of s1) {
        pattern.set(s, pattern.has(s) ? pattern.get(s) + 1 : 1);
    }

    // sliding window
    let start = 0, end = 0, counter = pattern.size;

    // until we reach the end
    while (end < s2.length) {
        // if pattern has a current char
        if (pattern.has(s2[end])) {
            // decrease the pattern value
            pattern.set(s2[end], pattern.get(s2[end]) - 1);
            // if pattern value is 0 then we found all
            if (pattern.get(s2[end]) === 0)
                counter--;
        }
        // move the window
        end++;

        // if counter is 0, then we found all char
        while (counter === 0) {
            // if current window length is equal to the pattern length
            // we found all char in a row
            if (end - start === s1.length)
                return true;

            // else check if the start of the window matches a char in pattern
            if (pattern.has(s2[start])) {
                // if so retrieve it and increase the pattern value
                pattern.set(s2[start], pattern.get(s2[start]) + 1);
                // if current pattern value is greater than 0
                // then we increaes the counter
                if (pattern.get(s2[start]) > 0)
                    counter++;
            }
            // move the start of window
            start++;
        }
    }

    // we did not find one
    return false;
}

/**
 * object instead of map
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 * Time complexity: O(l1 + (l2 - l1), where l1 is the length of string and l2 is the length of pattern.
 * Space complexity: O(1). Constant space is used.
 */
const checkInclusion = function (s1, s2) {
    if (s1.length > s2.length)
        return false;

    const map = {};
    let count = 0;
    for (let i = 0; i < s1.length; i++) {
        const char = s1[i];
        if (!(char in map)) {
            map[char] = 0;
            count++;
        }
        map[char]++;
    }
    let start = 0, end = 0;
    while (end < s2.length) {
        const char = s2[end];
        if (char in map) {
            map[char]--;
            if (map[char] === 0) {
                count--;
            }
        }
        end++;
        while (count === 0) {
            if (end - start === s1.length)
                return true;
            const char = s2[start];
            if (char in map) {
                map[char]++;
                if (map[char] === 1)
                    count++;
            }
            start++;
        }
    }
    return false;
}
