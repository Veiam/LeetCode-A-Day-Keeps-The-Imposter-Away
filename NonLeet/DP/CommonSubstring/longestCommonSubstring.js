// Given two strings ‘s1’ and ‘s2’, find the length of the longest substring which is common in both the strings.

const findLCSLength = function (s1, s2) {
    // recursive function i1 = s1 iterator i2 = s2 iterator
    // count = length of the longest substring
    const memoize = new [];
    function findLCSLengthRecursive(s1, s2, i1, i2, count) {
        // if iterator reached the end, return the current count
        if (i1 === s1.length || i2 === s2.length)
            return count;

        dp[i1] = dp[i1] || [];
        dp[i1][i2] = dp[i1][i2] || [];

        if (typeof dp[i1][i2][count] === 'undefined') {
            // If the strings have a matching character, we can recursively match
            // for the remaining lengths and keep a track of the current matching length.
            let c1 = count;
            if (s1[i1] === s2[i2]) {
                c1 = findLCSLengthRecursive(s1, s2, i1 + 1, i2 + 1, count + 1);
            }

            // If the strings don’t match, we start two new recursive calls
            // by skipping one character separately from each string and reset the matching length.
            const c2 = findLCSLengthRecursive(s1, s2, i1, i2 + 1, 0);
            const c3 = findLCSLengthRecursive(s1, s2, i1 + 1, i2, 0);
            dp[i1][i2][count] = Math.max(c1, Math.max(c2, c3));
        }

        return dp[i1][i2][count];
    }

    return findLCSLengthRecursive(s1, s2, 0, 0, 0);
};

console.log(`Length of Longest Common Substring: ---> ${findLCSLength('abdca', 'cbda')}`);
console.log(`Length of Longest Common Substring: ---> ${findLCSLength('passport', 'ppsspt')}`);

const findLCSLength = function (s1, s2) {
    const dp = new Array(s1.length + 1).fill(0).map(() => Array(s2.length + 1).fill(0));
    let max = 0;
    for (let i = 1; i <= s1.length; i++) {
        for (let j = 1; j <= s2.length; j++) {
            // If the character at s1[i] matches s2[j], the length of the common substring would be
            // one plus the length of the common substring till i-1 and j-1 indexes in the two strings.
            if (s1[i - 1] == s2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
                max = Math.max(dp[i][j], max);
            }
            // If the character at the s1[i] does not match s2[j], we don’t have any common substring.
            else {
                dp[i][j] = 0;
            }
        }
    }
    return max;
}


const findLCSLength = function (s1, s2) {
    const dp = Array(s2.length+1).fill(0);
    let max = 0;
    for (let i = 1; i <= s1.length; i++) {
        for (let j = 1; j <= s2.length; j++) {
            // If the character at s1[i] matches s2[j], the length of the common substring would be
            // one plus the length of the common substring till i-1 and j-1 indexes in the two strings.
            if (s1[i - 1] == s2[j - 1]) {
                console.log(`${dp[j]} ${dp[0]}`);
                [dp[j], dp[0]] = [1 + dp[0], dp[j]];
                max = Math.max(dp[j], max);
            }
            // If the character at the s1[i] does not match s2[j], we don’t have any common substring.
            else {
                dp[0] = dp[j];
                dp[j] = 0;
            }
        }
    }
    return max;
}