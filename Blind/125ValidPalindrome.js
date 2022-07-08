// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3:
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// Constraints:
// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

/**
 * @param {string} s
 * @return {boolean}
 * Time Complexity: O(n), loop through each char once
 * Space Complexity: O(1), constant space is used
 */
var isPalindrome = function (s) {
    // if length is less than 2, then it's always palindrome
    if (s.length < 2) {
        return true;
    }

    // two pointers
    let front = 0, back = s.length - 1;
    while (front < back) {
        // while it's not alphanumeric, move pointer
        while (front < back && !s[front].match(/[a-zA-Z0-9]/)) {
            front++;
        }
        while (front < back && !s[back].match(/[a-zA-Z0-9]/)) {
            back--;
        }

        // compare char
        if (s[front].toUpperCase() !== s[back].toUpperCase()) {
            return false;
        }
        // move pointers
        front++;
        back--;
    }

    // must be palindrome
    return true;
};