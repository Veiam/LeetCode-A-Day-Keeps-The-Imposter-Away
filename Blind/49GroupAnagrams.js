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
 var groupAnagrams = function(strs) {
    const res = {};
    
    for( let s of strs){
        let count = new Array(26).fill(0);
        for(let i = 0; i < s.length; i++){
            count[s.charCodeAt(i) - "a".charCodeAt(0)]++;
        }
        if(count in res){
            res[count] = [...res[count], s];
        }
        else{
            res[count] = [s];
        }
    }
    
    return Object.values(res);
    
};