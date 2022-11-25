// Given a string, find the total number of palindromic substrings in it. 
// Please note we need to find the total number of substrings and not subsequences.

let findCPS = function (st) {
    // dp[i][j] will be 'true' if the string from index 'i' to index 'j' is a palindrome
    constdp = Array(st.length)
        .fill(false)
        .map(() => Array(st.length).fill(false));

    let count = 0;

    // every string with one character is a palindrome
    for (let i = 0; i < st.length; i++) {
        dp[i][i] = true;
        count++;
    }

    for (let startIndex = st.length - 1; startIndex >= 0; startIndex--) {
        for (let endIndex = startIndex + 1; endIndex < st.length; endIndex++) {
            if (st.charAt(startIndex) == st.charAt(endIndex)) {
                // if it's a two character string or if the remaining string is a palindrome too
                if (endIndex - startIndex == 1 || dp[startIndex + 1][endIndex - 1]) {
                    dp[startIndex][endIndex] = true;
                    count++;
                }
            }
        }
    }

    return count;
};

console.log('Length of LPS: ---> ' + findCPS('abdbca'));
console.log('Length of LPS: ---> ' + findCPS('cddpd'));
console.log('Length of LPS: ---> ' + findCPS('pqr'));