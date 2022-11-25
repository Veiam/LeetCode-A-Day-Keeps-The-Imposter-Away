const findSPMCount = function (str, pat) {
    const memoize = [];

    function findSPMCountRecursive(str, pat, s1, p1) {

        // if we have reached the end of the pattern
        if (p1 == pat.length)
            return 1;

        // if we have reached the end of the string but pattern has still some characters left
        if (s1 == str.length)
            return 0;

        memoize[s1] = memoize[s1] || [];

        if (typeof memoize[s1][p1] == 'undefined') {
            let c1 = 0;
            // If the pattern has a matching character with the string
            //  we can recursively match for the remaining lengths of the pattern and the string.
            if (str[s1] == pat[p1]) {
                c1 = findSPMCountRecursive(str, pat, s1 + 1, p1 + 1);
            }
            // At every step, we can always skip a character from the string to try to
            // match the remaining string with the pattern. So we can start a recursive call by skipping one character from the string.
            const c2 = findSPMCountRecursive(str, pat, s1 + 1, p1);

            memoize[s1][p1] = c1 + c2;
        }

        return memoize[s1][p1];
    }
    return findSPMCountRecursive(str, pat, 0, 0);

};

console.log(`Count of pattern in the string: ---> ${findSPMCount('baxmx', 'ax')}`);
console.log(`Count of pattern in the string: ---> ${findSPMCount('tomorrow', 'tor')}`);

const findSPMCount = function (str, pat) {
    // every empty pattern has one match
    if (pat.length === 0) return 1;

    if (str.length === 0 || pat.length > str.length) return 0;

    // dp[strIndex][patIndex] will be storing the count of SPM up to str[0..strIndex-1][0..patIndex-1]
    const dp = Array(str.length + 1)
        .fill(0)
        .map(() => Array(pat.length + 1).fill(0));

    // for the empty pattern, we have one matching
    for (let i = 0; i <= str.length; i++) dp[i][0] = 1;

    for (let strIndex = 1; strIndex <= str.length; strIndex++) {
        for (let patIndex = 1; patIndex <= pat.length; patIndex++) {
            if (str[strIndex - 1] === pat[patIndex - 1]) {
                dp[strIndex][patIndex] = dp[strIndex - 1][patIndex - 1];
            }
            dp[strIndex][patIndex] += dp[strIndex - 1][patIndex];
        }
    }

    return dp[str.length][pat.length];
};
