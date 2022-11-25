// Given a string, find the minimum number of characters that we can remove to make it a palindrome.

// top down
let findMinimumDeletions = function (st) {
    const memoize = [];
    function findMinimumDeletionsRecursive(st, start, end) {
        if (start > end) {
            return 0;
        }
        if (start == end) {
            return 1;
        }
        memoize[start] = memoize[start] || [];
        if (typeof memoize[start][end] == 'undefined') {
            // case 1: elements at the beginning and the end are the same
            if (st[start] == st[end]) {
                memoize[start][end] = 2 + findMinimumDeletionsRecursive(st, start + 1, end - 1);
            }
            // case 2: skip one element either from the beginning or the end
            else {
                let lps1 = findMinimumDeletionsRecursive(st, start + 1, end);
                let lps2 = findMinimumDeletionsRecursive(st, start, end - 1);
                memoize[start][end] = Math.max(lps1, lps2);
            }
        }
        return memoize[start][end];
    }
    return st.length - findMinimumDeletionsRecursive(st, 0, st.length - 1);
}

// bottom up
let findMinimumDeletions = function (st) {
    function findMDLength(st) {
        // dp[i][j] stores the length of LPS from index 'i' to index 'j'
        const dp = Array(st.length)
            .fill(0)
            .map(() => Array(st.length).fill(0));

        // every sequence with one element is a palindrome of length 1
        for (let i = 0; i < st.length; i++) {
            dp[i][i] = 1;
        }


        for (let i = st.length - 1; i >= 0; i--) {
            for (let j = i + 1; j < st.length; j++) {
                // case 1: elements at the beginning and the end are the same
                if (st[i] == st[j]) {
                    dp[i][j] = 2 + dp[i + 1][j - 1];
                }
                // case 2: skip one element either from the beginning or the end
                else {
                    dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
                }
            }
        }
        return dp[0][st.length - 1];

    }

    // subtracting the length of Longest Palindromic Subsequence from the length of
    // the input string to get minimum number of deletions
    return st.length - findMDLength(st);
}