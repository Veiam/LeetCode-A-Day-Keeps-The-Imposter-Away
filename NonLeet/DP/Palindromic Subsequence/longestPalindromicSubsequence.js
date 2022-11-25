// Given a sequence, find the length of its Longest Palindromic Subsequence (LPS).
// In a palindromic subsequence, elements read the same backward and forward.

let findLPSLength = function (st) {

    function findLPSLengthRecursive(st, startIndex, endIndex) {
        if (startIndex > endIndex)
            return 0;

        // every sequence with one element is a palindrome of length 1
        if (startIndex === endIndex)
            return 1;

        // case 1: elements at the beginning and the end are the same
        if (st[startIndex] === st[endIndex])
            return 2 + findLPSLengthRecursive(st, startIndex + 1, endIndex - 1);

        // case 2: skip one element either from the beginning or the end
        let c1 = findLPSLengthRecursive(st, startIndex + 1, endIndex);
        let c2 = findLPSLengthRecursive(st, startIndex, endIndex - 1);
        return Math.max(c1, c2);
    }

    return findLPSLengthRecursive(st, 0, st.length - 1);
}

console.log("Length of LPS ---> " + findLPSLength("abdbca"));
console.log("Length of LPS ---> " + findLPSLength("cddpd"));
console.log("Length of LPS ---> " + findLPSLength("pqr"));

let findLPSLength = function (st) {
    constdp = [];

    function findLPSLengthRecursive(st, startIndex, endIndex) {
        if (startIndex > endIndex) return 0;

        // every sequence with one element is a palindrome of length 1
        if (startIndex === endIndex) return 1;

        dp[startIndex] = dp[startIndex] || [];

        if (typeof dp[startIndex][endIndex] === 'undefined') {
            /// 1. If the element at the beginning and the end are the same, we increment our count by two and make a recursive call for the remaining sequence.
            if (st[startIndex] === st[endIndex]) {
                dp[startIndex][endIndex] = 2 + findLPSLengthRecursive(st, startIndex + 1, endIndex - 1);
            } else {
                // 2. We will skip the element either from the beginning or the end to make two recursive calls for the remaining subsequence.
                let c1 = findLPSLengthRecursive(st, startIndex + 1, endIndex);
                let c2 = findLPSLengthRecursive(st, startIndex, endIndex - 1);
                dp[startIndex][endIndex] = Math.max(c1, c2);
            }
        }

        return dp[startIndex][endIndex];
    }

    return findLPSLengthRecursive(st, 0, st.length - 1);
};

let findLPSLength = function (st) {
    // dp[i][j] stores the length of LPS from index 'i' to index 'j'
    constdp = Array(st.length)
        .fill(0)
        .map(() => Array(st.length).fill(0));

    // every sequence with one element is a palindrome of length 1
    for (let i = 0; i < st.length; i++) {
        dp[i][i] = 1;
    }

    for (let startIndex = st.length - 1; startIndex >= 0; startIndex--) {
        for (let endIndex = startIndex + 1; endIndex < st.length; endIndex++) {
            // case 1: elements at the beginning and the end are the same
            // If the element at the startIndex matches the element at the endIndex,
            // the length of LPS would be two plus the length of LPS till startIndex+1 and endIndex-1.
            if (st.charAt(startIndex) == st.charAt(endIndex)) {
                dp[startIndex][endIndex] = 2 + dp[startIndex + 1][endIndex - 1];
            } else {
                // case 2: skip one element either from the beginning or the end
                // If the element at the startIndex does not match the element at the endIndex,
                // we will take the maximum LPS created by either skipping element at the startIndex or the endIndex.
                dp[startIndex][endIndex] = Math.max(
                    dp[startIndex + 1][endIndex],
                    dp[startIndex][endIndex - 1]
                );
            }
        }
    }
    return dp[0][st.length - 1];
};