// Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.
// Implement the encode and decode methods.
// You are not allowed to solve the problem using any serialize methods (such as eval).

// Example 1:
// Input: dummy_input = ["Hello","World"]
// Output: ["Hello","World"]
// Explanation:

// Machine 1:
// Codec encoder = new Codec();
// String msg = encoder.encode(strs);
// Machine 1 ---msg---> Machine 2

// Machine 2:
// Codec decoder = new Codec();
// String[] strs = decoder.decode(msg);

// Example 2:
// Input: dummy_input = [""]
// Output: [""]

// Constraints:
// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] contains any possible characters out of 256 valid ASCII characters.

// Follow up: Could you write a generalized algorithm to work on any possible set of characters?

/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
var encode = function (strs) {
    // turn list of strings to a single string with non ASCII characters
    return strs.join(String.fromCharCode(257));
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
var decode = function (s) {
    // turn single string into a list of strings, identified by non ASCII characters
    return s.split(String.fromCharCode(257));
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */

/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
var encode = function (strs) {
    let res = "";
    // loop through strings
    for (let str of strs) {
        // string will be encoded to this format
        // length of string + special char + string
        // special char acts as a divider between length and string
        res += str.length + "#" + str;
    }
    return res;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
var decode = function (s) {
    const res = [];
    let i = 0;
    // loop through string
    while (i < s.length) {
        let num = "";
        // string will begin with numbers for length until it meets the divider #
        while (s[i] != "#") {
            num += s[i];
            i++;
        }
        // get length
        num = parseInt(num);
        // push the string to result
        res.push(s.substring(i + 1, i + 1 + num));
        // move the pointer
        i = i + 1 + num;
    }

    return res;
};

