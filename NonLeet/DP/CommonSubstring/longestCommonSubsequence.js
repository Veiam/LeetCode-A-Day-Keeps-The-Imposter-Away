// Given two strings ‘s1’ and ‘s2’, find the length of the longest subsequence which is common in both the strings.

const findLCSLength = function (s1, s2) {
    const memoize = [];
    function findLCSLengthRecursive(s1, s2, i1, i2) {
        if (i1 == s1.length || i2 == s2.length) {
            return 0;
        }
        memoize[i1] = memoize[i1] || [];

        if (typeof memoize[i1][i2] == 'undefined') {
            // If the character s1[i] matches s2[j], we can recursively match for the remaining lengths.
            if (s1[i1] == s2[i2]) {
                memoize[i1][i2] = 1 + findLCSLengthRecursive(s1, s2, i1 + 1, i2 + 1);
            }
            // If the character s1[i] does not match s2[j], we will start two new recursive calls by skipping one character separately from each string.
            else {
                const l1 = findLCSLengthRecursive(s1, s2, i1, i2 + 1);
                const l2 = findLCSLengthRecursive(s1, s2, i1 + 1, i2);
                memoize[i1][i2] = Math.max(l1, l2);
            }
        }
        return memoize[i1][i2];
    }
    return findLCSLengthRecursive(s1, s2, 0, 0, 0);
};

console.log(`Length of Longest Common Subsequence: ---> ${findLCSLength('abdca', 'cbda')}`);
console.log(`Length of Longest Common Subsequence: ---> ${findLCSLength('passport', 'ppsspt')}`);

const findLCSLength = function (s1, s2) {
    const dp = Array(2).fill(0).map(() => Array(s2.length + 1).fill(0));
    for(let i = 1; i <= s1.length; i++){
        for(let j = 1; j<= s2.length; j++){
            // If the character s1[i] matches s2[j], the length of the common subsequence would be
            // one plus the length of the common subsequence till the i-1 and j-1 indexes in the two respective strings.
            if(s1[i-1] == s2[j-1]){
                dp[1][j] = dp[0][j-1] + 1;
            }
            // If the character s1[i] does not match s2[j], we will take the longest subsequence by
            // either skipping ith or jth character from the respective strings.
            else{
                dp[1][j] = Math.max(dp[0][j],dp[1][j-1]);
            }
        }
        dp[0] = dp[1];
    }
    return dp[0][s2.length];
};
