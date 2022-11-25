// Given a sequence, find the length of its longest repeating subsequence (LRS). 
// A repeating subsequence will be the one that appears at least twice in the original sequence
// and is not overlapping (i.e. none of the corresponding characters in the repeating subsequences have the same index).
const findLRSLength = function (str) {
    const memoize = [];
    function findLRSLengthRecursive(str, i1, i2) {
        if (i1 == str.length || i2 == str.length) {
            return 0;
        }

        memoize[i1] = memoize[i1] || [];

        if (typeof memoize[i1][i2] == 'undefined') {
            // If the two indexes are not the same and the characters at both the indexes are same,
            // we can recursively match for the remaining length (i.e. by incrementing both the indexes).
            if (str[i1] == str[i2] && i1 != i2) {
                memoize[i1][i2] = 1 + findLRSLengthRecursive(str, i1 + 1, i2 + 1);
            }
            else {
                // If the characters at both the indexes don’t match, we start two new recursive calls by
                // incrementing each index separately. The LRS would be the one with the highest length from the two recursive calls.
                const c1 = findLRSLengthRecursive(str, i1, i2 + 1);
                const c2 = findLRSLengthRecursive(str, i1 + 1, i2);
                memoize[i1][i2] = Math.max(c1, c2);
            }
        }
        return memoize[i1][i2];

    }
    return findLRSLengthRecursive(str, 0, 1);
};

console.log(`Length of Longest Repeating Subsequence: ---> ${findLRSLength('tomorrow')}`);
console.log(`Length of Longest Repeating Subsequence: ---> ${findLRSLength('aabdbcec')}`);
console.log(`Length of Longest Repeating Subsequence: ---> ${findLRSLength('fmff')}`);

const findLRSLength = function (str) {
    const dp = Array(str.length + 1).fill(0).map(() => Array(str.length + 1).fill(0));

    let max = 0;
    // dp[i1][i2] will be storing the LRS up to str[0..i1-1][0..i2-1]
    // this also means that subsequences of length zero (first row and column of dp[][]),
    // will always have LRS of size zero.
    for (let i = 1; i <= str.length; i++) {
        for (let j = 1; j <= str.length; j++) {
            // If ‘i1’ and ‘i2’ are different and the character str[i1] matches the character str[i2], 
            // then the length of the LRS would be one plus the length of LRS up to i1 - 1 and i2 - 1 indexes.
            if (str[i - 1] == str[j - 1] && i != j) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
            }
            // If the character at str[i1] does not match str[i2],
            // we will take the LRS by either skipping 'i1’th or 'i2’th character.
            else {
                dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
            }
            max = Math.max(dp[i][j], max);
        }
    }
    return max;
};

