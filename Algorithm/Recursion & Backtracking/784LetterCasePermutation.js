// Given a string s, we can transform every letter individually to be lowercase or uppercase to create another string.
// Return a list of all possible strings we could create. You can return the output in any order.

// Example 1:
// Input: s = "a1b2"
// Output: ["a1b2","a1B2","A1b2","A1B2"]

// Example 2:
// Input: s = "3z4"
// Output: ["3z4","3Z4"]

// Example 3:
// Input: s = "12345"
// Output: ["12345"]

// Example 4:
// Input: s = "0"
// Output: ["0"]

// Constraints:
// s will be a string with length between 1 and 12.
// s will consist only of letters or digits.

/**
 * Recursion, backtrack
 * @param {string} s
 * @return {string[]}
 * Time Complexity: O(2^N ∗ N), where N is the length of S.
 * Space Complexity: O(2^N ∗ N).
 */
const letterCasePermutation = function (s) {
    const res = [], len = s.length;

    function backtrack(string, first) {
        if (first == len) {
            // push char array as a string
            res.push(string.join(''));
            // return to exit
            return;
        }
        const curChar = string[first];
        // found a letter
        if (curChar.toUpperCase() !== curChar.toLowerCase()) {
            string[first] = curChar.toUpperCase();
            backtrack(string, first + 1);
            string[first] = curChar.toLowerCase();
            backtrack(string, first + 1);
        }
        // found a digit
        else {
            backtrack(string, first + 1);
        }

    }
    // turn string into char array
    backtrack(s.split(''), 0);
    return res;
};

/**
 * Iterative, Binary Mask
 * @param {string} s
 * @return {string[]}
 * Time Complexity: O(2^N ∗ N), where N is the length of S.
 * Space Complexity: O(2^N ∗ N).
 */
const letterCasePermutation = function (s) {
    let b = 0;
    // count all letters
    for (let char of s) {
        if (char.toUpperCase() !== char.toLowerCase())
            b++;
    }

    const ans = [];
    // For every possible bitmask, construct the correct result to put in the final answer.
    for (let bits = 0; bits < 1 << b; bits++) {
        let b = 0;
        const word = [];
        for (let char of s) {
            // If the next letter in the word is a letter, write a lowercase or uppercase letter depending on the bitmask
            if (char.toUpperCase() !== char.toLowerCase()) {
                if ((bits >> b) & 1)
                    word.push(char.toLowerCase());
                else
                    word.push(char.toUpperCase());
                b++;
            }
            // Otherwise, write the digit as given.
            else
                word.push(char);
        }
        ans.push(word.join(''));
    }

    return ans;
};