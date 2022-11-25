// Given strings s1 and s2, we need to transform s1 into s2 by deleting, inserting, or replacing characters.
// Write a function to calculate the count of the minimum number of edit operations.

const findMinOperations = function (s1, s2) {
    const memoize = [];
    function findMinOperationsRecursive(s1, s2, i1, i2) {
        // if we have reached the end of s1, then we have to insert all the remaining characters of s2
        if (i1 == s1.length)
            return s2.length - i2;

        // if we have reached the end of s2, then we have to delete all the remaining characters of s1
        if (i2 == s2.length)
            return s1.length - i1;

        memoize[i1] = memoize[i1] || [];

        if (typeof memoize[i1][i2] == 'undefined') {
            // If the strings have a matching character, we can recursively match for the remaining lengths.
            if (s1[i1] == s2[i2])
                memoize[i1][i2] = findMinOperationsRecursive(s1, s2, i1 + 1, i2 + 1);
            else {
                let c1 = 1 + findMinOperationsRecursive(s1, s2, i1 + 1, i2); //perform deletion
                let c2 = 1 + findMinOperationsRecursive(s1, s2, i1, i2 + 1); //perform insertion
                let c3 = 1 + findMinOperationsRecursive(s1, s2, i1 + 1, i2 + 1); // perform replacement
                memoize[i1][i2] = Math.min(c1, c2, c3);
            }
        }
        return memoize[i1][i2];

    }
    return findMinOperationsRecursive(s1, s2, 0, 0);
};
console.log(`Minimum Edit Distance: ---> ${findMinOperations('bat', 'but')}`);
console.log(`Minimum Edit Distance: ---> ${findMinOperations('abdca', 'cbda')}`);
console.log(`Minimum Edit Distance: ---> ${findMinOperations('passpot', 'ppsspqrt')}`);


const findMinOperations = function (s1, s2) {
    const dp = Array(s1.length + 1).fill(1).map(() => Array(s2.length + 1).fill(1));

    const minium = Infinity;
    for (let i = 1; i <= s1.length; i++) {
        for (let j = 1; j <= s2.length; j++) {
            // If the strings have a matching character, we can recursively match for the remaining lengths
            if (s1[i - 1] == s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            }
            else {
                dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) + 1;
            }
            minimum = Math.min(minium, dp[i][j]);
        }
    }
    return minimum;
}