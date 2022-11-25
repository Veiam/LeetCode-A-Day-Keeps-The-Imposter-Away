// There is a new alien language that uses the English alphabet. However, the order among the letters is unknown to you.
// You are given a list of strings words from the alien language's dictionary, where the strings in words are sorted lexicographically by the rules of this new language.
// Return a string of the unique letters in the new alien language sorted in lexicographically increasing order by the new language's rules. If there is no solution, return "". If there are multiple solutions, return any of them.
// A string s is lexicographically smaller than a string t if at the first letter where they differ, the letter in s comes before the letter in t in the alien language. If the first min(s.length, t.length) letters are the same, then s is smaller if and only if s.length < t.length.

// Example 1:
// Input: words = ["wrt","wrf","er","ett","rftt"]
// Output: "wertf"

// Example 2:
// Input: words = ["z","x"]
// Output: "zx"

// Example 3:
// Input: words = ["z","x","z"]
// Output: ""
// Explanation: The order is invalid, so return "".

// Constraints:
// 1 <= words.length <= 100
// 1 <= words[i].length <= 100
// words[i] consists of only lowercase English letters.
/**
 * DFS, topological sort
 * @param {string[]} words
 * @return {string}
 * Time:
 * Space:
 */
var alienOrder = function (words) {
    const graph = new Map();
    const buffer = [];
    const seen = new Map();
    // find all unique chars
    for (const word of words) {
        for (const char of word) {
            graph.set(char, []);
        }
    }
    // loop through 
    for (let index = 0; index < words.length - 1; index++) {
        const word1 = words[index];
        const word2 = words[index + 1];


        // check if word2 is a prefix of word1
        if (word2.length < word1.length && word1.startsWith(word2)) {
            return "";
        }
        // find the first non match and insert to graph
        const minLength = Math.min(word1.length, word2.length);
        for (let j = 0; (j < minLength); j++) {
            const [char1, char2] = [word1[j], word2[j]];
            if (char1 === char2) {
                continue;
            }
            graph.get(char1).push(char2);
            break;
        }
    }
    // DFS to build res
    for (const [char] of graph) {
        if (!dfs(char))
            return "";
    }

    return buffer.reverse().join('')

    // Return ture if no cycles
    function dfs(char) {
        // if this node was visited during current cycle then there can be a cycle
        if (seen.has(char)) {
            return seen.get(char);
        }

        seen.set(char, false);
        for (const neighbor of graph.get(char)) {
            if (!dfs(neighbor))
                return false;
        }
        seen.set(char, true);
        buffer.push(char);
        return true;
    }

};