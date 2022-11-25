// You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part.
// Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.
// Return a list of integers representing the size of these parts.

// Example 1:
// Input: s = "ababcbacadefegdehijhklij"
// Output: [9,7,8]
// Explanation:
// The partition is "ababcbaca", "defegde", "hijhklij".
// This is a partition so that each letter appears in at most one part.
// A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.

// Example 2:
// Input: s = "eccbbbbdec"
// Output: [10]

// Constraints:
// 1 <= s.length <= 500
// s consists of lowercase English letters.
/**
 * @param {string} s
 * @return {number[]}
 * Time: O(n)
 * Space: O(1), it's 1 because maximum size of map is to store 26 alphabets
 */
var partitionLabels = function (s) {
    const map = {};

    // build a map of chars with starting index and last index
    for (let c in s) {
        if (map[s[c]] == null) {
            map[s[c]] = [c, c];
        }
        map[s[c]][1] = c;
    }

    let curStart = 0;
    let curEnd = 0;
    let res = [];
    for (let [key, [start, end]] of Object.entries(map)) {
        // if current ends before the new start
        // push the length of the range and update start
        if (curEnd < start) {
            res.push(curEnd - curStart + 1);
            curStart = start;
        }
        curEnd = Math.max(end, curEnd);

        // if we reached the end
        // add the range and break out
        if (curEnd >= s.length - 1) {
            res.push(curEnd - curStart + 1);
            break;
        }
    }
    return res;
};