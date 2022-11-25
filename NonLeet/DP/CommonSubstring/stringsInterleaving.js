// Give three strings ‘m’, ‘n’, and ‘p’, write a method to find out if ‘p’ has been formed by
// interleaving ‘m’ and ‘n’. ‘p’ would be considered interleaving ‘m’ and ‘n’ if it contains
// all the letters from ‘m’ and ‘n’ and the order of letters is preserved too.

// verify both subsequence

const findSI = function (m, n, p) {
    let memoize = [];
    function findSIRecursive(sub, string, i1, i2) {
        if (sub.length == i1) {
            return true;
        }
        if (string.length == i2) {
            return false;
        }
        memoize[i1] = memoize[i1] || [];
        if (typeof memoize[i1][i2] == 'undefined') {
            if (sub[i1] == string[i2]) {
                memoize[i1][i2] = findSIRecursive(sub, string, i1 + 1, i2 + 1)
            }
            else {
                memoize[i1][i2] = findSIRecursive(sub, string, i1, i2 + 1);
            }

        }
        return memoize[i1][i2];
    }
    const res1 = findSIRecursive(m, p, 0, 0);
    console.log(memoize);
    memoize = [];
    const res2 = findSIRecursive(n, p, 0, 0);
    console.log(memoize);
    if (res1 && res2) {
        return true;
    }
    return false;

};

console.log(`String leterleaving: ---> ${findSI('abd', 'cef', 'abcdef')}`);
console.log(`String leterleaving: ---> ${findSI('abd', 'cef', 'adcbef')}`);
console.log(`String leterleaving: ---> ${findSI('abc', 'def', 'abdccf')}`);
console.log(`String leterleaving: ---> ${findSI('abcdef', 'mnop', 'mnaobcdepf')}`);

const findSI = function (m, n, p) {
    // dp[mIndex][nIndex] will be storing the result of string leterleaving
    // up to p[0..mIndex+nIndex-1]
    const dp = Array(m.length + 1)
        .fill(false)
        .map(() => Array(n.length + 1).fill(false));

    // make sure if lengths of the strings add up
    if (m.length + n.length != p.length) return false;

    for (let mIndex = 0; mIndex <= m.length; mIndex++) {
        for (let nIndex = 0; nIndex <= n.length; nIndex++) {
            // if 'm' and 'n' are empty, then 'p' must have been empty too.
            if (mIndex === 0 && nIndex === 0) {
                dp[mIndex][nIndex] = true;
            }
            // if the letter of 'm' and 'p' match, we take whatever is matched till mIndex-1
            if (mIndex > 0 && m[mIndex - 1] === p[mIndex + nIndex - 1]) {
                dp[mIndex][nIndex] = dp[mIndex - 1][nIndex];
            }
            // if the letter of 'n' and 'p' match, we take whatever is matched till nIndex-1 too
            // note the '||', this is required when we have common letters
            if (nIndex > 0 && n[nIndex - 1] === p[mIndex + nIndex - 1]) {
                dp[mIndex][nIndex] = dp[mIndex][nIndex] || dp[mIndex][nIndex - 1];
            }
        }
    }
    return dp[m.length][n.length];
};