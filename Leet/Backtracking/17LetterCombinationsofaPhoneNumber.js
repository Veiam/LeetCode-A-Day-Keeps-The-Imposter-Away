// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Example 1:
// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

// Example 2:
// Input: digits = ""
// Output: []

// Example 3:
// Input: digits = "2"
// Output: ["a","b","c"]

// Constraints:
// 0 <= digits.length <= 4
// digits[i] is a digit in the range ['2', '9'].

/**
 * @param {string} digits
 * @return {string[]}
 * Time: O(n * 4^n), in worst case we have to look for 4 possible solutiosn for each digit
 * Space: O(n), recursive stack
 */
var letterCombinations = function (digits) {
    // buidl a map
    const digitToChar = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'qprs',
        8: 'tuv',
        9: 'wxyz',
    };

    let res = [];
    function backtrack(index, comb) {
        if (index >= digits.length) {
            res.push(comb);
            return;
        }
        // loop through letters and recursively backtrack
        for (let letter of digitToChar[digits[index]]) {
            backtrack(index + 1, comb + letter);
        }
    }
    // to account for when digit length is 0
    if (digits) {
        backtrack(0, '');
    }
    return res;
};