// Given strings s1 and s2, we need to transform s1 into s2 by deleting and inserting characters.
// Write a function to calculate the count of the minimum number of deletion and insertion operations.
const findMDI = function (s1, s2) {
    const c1 = findLCSLength(s1, s2);
    console.log(`Minimum deletions needed: ${s1.length - c1}`);
    console.log(`Minimum insertions needed: ${s2.length - c1}`);
};

function findLCSLength(s1, s2) {
    const dp = Array(s1.length + 1)
        .fill(0)
        .map(() => Array(s2.length + 1).fill(0));

    let maxLength = 0;
    for (let i = 1; i <= s1.length; i++) {
        for (let j = 1; j <= s2.length; j++) {
            if (s1[i - 1] == s2[j - 1])
                dp[i][j] = 1 + dp[i - 1][j - 1];
            else
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            maxLength = Math.max(maxLength, dp[i][j]);
        }
    }
    return maxLength;
}

findMDI('abc', 'fbc');
findMDI('abdca', 'cbda');
findMDI('passport', 'ppsspt');

