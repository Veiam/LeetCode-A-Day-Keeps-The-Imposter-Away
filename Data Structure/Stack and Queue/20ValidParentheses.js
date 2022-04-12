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

// Example 4:
// Input: s = "([)]"
// Output: false

// Example 5:
// Input: s = "{[]}"
// Output: true

// Constraints:
// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

/**
 * @param {string} s
 * @return {boolean}
 * Time Complexity: O(n), where n is the length of s
 * Space Complexity: O(n), where n is the length of n. In worst case we push all opening brackets.
 */
const isValid = function (s) {
    const stack = [];
    const map = { '(': ')', '[': ']', '{': '}' };
    for (let cur of s) {
        // if we found opening parentheses, add a closing
        if (cur in map) {
            stack.push(map[cur]);
        }
        // if we found closing, see if it matches the stack
        else if (stack.pop() !== cur) {
            return false;
        }

    }
    // if any is remaining then return false
    return stack.length === 0 ? true : false;
};