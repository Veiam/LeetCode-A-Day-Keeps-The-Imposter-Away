// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// Example 1:
// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"

// Example 2:
// Input: s = "God Ding"
// Output: "doG gniD"

// Constraints:
// 1 <= s.length <= 5 * 104
// s contains printable ASCII characters.
// s does not contain any leading or trailing spaces.
// There is at least one word in s.
// All the words in s are separated by a single space.

/**
 * @param {string} s
 * @return {string}
 * Time complexity : O(N), where nn is the length of the string.
 * Space complexity : O(1), it's a constant space solution.
 */
const reverseWords = function (s) {
    // turn s into an array
    s = s.split('');
    let = start = 0;
    // loop through the array
    for (let cur = 0; cur <= s.length; cur++) {
        // if we reached the end or current index holds a space
        if (s[cur] === ' ' || cur === s.length) {
            // set an end value to current index - 1
            let end = cur - 1;
            // until we reach the middle
            while (start < end) {
                // swap start and end
                [s[start], s[end]] = [s[end], s[start]];
                start++;
                end--;
            }
            // set the next start to a character after the current space
            start = cur + 1;
        }
    }
    // join the array back as a string.
    return s.join('');
};

//one liner vs two pointers above
const reverseWords = function (s) {
    // split string into an array with a space as a separator
    return s.split(' ').
        // for each index
        map(w =>
            // split a string into an array
            w.split('').
                // reverse an array
                reverse().
                // join it back as a string
                join('')).
        // join array into a string with a space as a separator
        join(' ');
};