// Given a string s containing only three types of characters: '(', ')' and '*', return true if s is valid.
// The following rules define a valid string:
// Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// Any right parenthesis ')' must have a corresponding left parenthesis '('.
// Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "(*)"
// Output: true

// Example 3:
// Input: s = "(*))"
// Output: true

// Constraints:
// 1 <= s.length <= 100
// s[i] is '(', ')' or '*'.

/**
 * @param {string} s
 * @return {boolean}
 * Time: O(n)
 * Space: O(1)
 */
var checkValidString = function (s) {
    let open = 0, close = 0;
    for (let char of s) {
        // if char is open, then increase open count
        if (char == "(") {
            open++;
        }
        // else char is close or wild card, so decrease open count
        else {
            open--;
        }

        // if char is not close, then decrease the close count
        if (char != ")") {
            close--
        }
        // else char is open or wild card, so increase close count
        else {
            close++;
        }

        // if there are more close than we have wild or open then it's invalid
        if (close > 0) {
            break;
        }
        // if open is negative then it means either
        // there are more closed than we can open or
        // we have wildcards that can turn into open
        // since we take care of close in if statement above
        // this means we can turn wild card into open
        open = Math.max(open, 0);
    }
    return open === 0;
};