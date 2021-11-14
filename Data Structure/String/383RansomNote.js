// Given two stings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.

// Example 1:
// Input: ransomNote = "a", magazine = "b"
// Output: false

// Example 2:
// Input: ransomNote = "aa", magazine = "ab"
// Output: false

// Example 3:
// Input: ransomNote = "aa", magazine = "aab"
// Output: true

// Constraints:
// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 * Time Complexity: O(m + n) or O(n) where m is length of ransomNote and n is length of magazine
 * Space Complexity: O(1), we know there are only 26 lowercase English letters
 */
const canConstruct = function (ransomNote, magazine) {
    const mag = {};
    for (let i = 0; i < magazine.length; i++) {
        const char = magazine[i];
        // make hashmap of char
        if (!(char in mag))
            mag[char] = 0;
        mag[char]++;
    }

    for (let i = 0; i < ransomNote.length; i++) {
        // see if it's in map
        const char = ransomNote[i];
        if (char in mag && mag[char] > 0) {
            mag[char]--;
        }
        else
            return false;

    }
    return true;
};