// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:
// Input: strs = [""]
// Output: [[""]]

// Example 3:
// Input: strs = ["a"]
// Output: [["a"]]

// Constraints:
// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

/**
 * @param {string[]} strs
 * @return {string[][]}
 * Time Complexity: O(m*n), time to go through each letter in each string
 * Space Complexity: O(n), space to store each string in group in object
 */
var groupAnagrams = function (strs) {
    const res = {};

    // loop through each string
    for (let s of strs) {
        // build a array of 26, representing each alphabet
        let freq = new Array(26).fill(0);
        // go through each char in string
        for (let i = 0; i < s.length; i++) {
            // increase the frequency count
            freq[s.charCodeAt(i) - "a".charCodeAt(0)]++;
        }
        // if freq already exists, append it
        if (freq in res) {
            res[freq] = [...res[freq], s];
        }
        else {
            res[freq] = [s];
        }
    }

    // return the stored values
    return Object.values(res);

};