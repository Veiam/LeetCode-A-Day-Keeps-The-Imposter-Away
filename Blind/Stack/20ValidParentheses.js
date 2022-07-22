// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

// Constraints:
// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

/**
 * @param {string} s
 * @return {boolean}
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
var isValid = function (s) {
    // Map of brackets, could be turn into if condition instead.
    const map = { '{': '}', '[': ']', '(': ')' };
    let brackets = new Array();
    // Build a stack, last in first out
    for (let p of s) {
        // for open bracket, push closed bracket
        if (p in map) {
            brackets.push(map[p]);
        }
        // for closed bracket, pop and see if it matches
        else if (p !== brackets.pop()) {
            return false;
        }
    }
    return brackets.length === 0 ? true : false;
};