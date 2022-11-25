const findSCSLength = function (s1, s2) {
    const memoize = [];
    function findSCSLengthRecursive(s1, s2, i1, i2) {
        // if we have reached the end of a string, return the remaining length of the other string, as in
        // this case we have to take all of the remaining other string
        if (s1.length == i1)
            return s2.length - i2;
        if (s2.length == i2)
            return s1.length - i1;

        memoize[i1] = memoize[i1] || [];
        if (typeof memoize[i1][i2] == 'undefined') {
            // If the sequences have a matching character, we can skip one character from
            // both the sequences and make a recursive call for the remaining lengths to get SCS.
            if (s1[i1] == s2[i2]) {
                memoize[i1][i2] = 1 + findSCSLengthRecursive(s1, s2, i1 + 1, i2 + 1);
            }
            else {
                // If the strings don’t match, we start two new recursive calls by
                // skipping one character separately from each string. The minimum of these two recursive calls will have our answer.
                const c1 = 1 + findSCSLengthRecursive(s1, s2, i1 + 1, i2);
                const c2 = 1 + findSCSLengthRecursive(s1, s2, i1, i2 + 1);
                memoize[i1][i2] = Math.min(c1, c2);
            }
        }
        return memoize[i1][i2];
    }
    return findSCSLengthRecursive(s1, s2, 0, 0);
};

console.log(
    `Length of Shortest Common Subsequence: Substring: ---> ${findSCSLength('abcf', 'bdcf')}`
);
console.log(
    `Length of Shortest Common Subsequence: Substring: ---> ${findSCSLength(
        'dynamic',
        'programming'
    )}`
);

const findSCSLength = function (s1, s2) {
    const dp = Array(s1.length + 1).fill(0).map(() => Array(s2.length + 1).fill(0));

    // if one of the strings is of zero length, SCS would be equal to the length of the other string
    for (let i = 1; i <= s1.length; i++) {
        dp[i][0] =i;
    }
    for (let j = 1; j <= s2.length; j++) {
        dp[0][j] = j;
    }

    for (let i = 1; i <= s1.length; i++) {
        for (let j = 1; j <= s2.length; j++) {
            // If the character s1[i] matches s2[j], the length of the SCS would be the
            // one plus the length of the SCS till i-1 and j-1 indexes in the two strings.
            if (s1[i-1] == s2[j-1])
                dp[i][j] = 1 + dp[i - 1][j - 1];
            // If the character s1[i] does not match s2[j], we will consider two SCS: 
            // one without s1[i] and one without s2[j]. Our required SCS length will be the shortest of these two super-sequences plus one.
            else
                dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1]);
        }
    }

    return dp[s1.length][s2.length];
}
