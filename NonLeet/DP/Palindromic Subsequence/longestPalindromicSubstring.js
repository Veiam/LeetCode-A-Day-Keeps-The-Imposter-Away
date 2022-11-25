// Given a string, find the length of its Longest Palindromic Substring (LPS).
// In a palindromic string, elements read the same backward and forward.

let findLPSLength = function (st) {
    const dp = [];

    function findLPSLengthRecursive(st, startIndex, endIndex) {
        if (startIndex > endIndex) return 0;

        // every string with one character is a palindrome
        if (startIndex === endIndex) return 1;

        dp[startIndex] = dp[startIndex] || [];

        if (typeof dp[startIndex][endIndex] === 'undefined') {
            // case 1: elements at the beginning and the end are the same
            // 1. If the element at the beginning and the end are the same, we make a recursive call to check if the remaining substring is also a palindrome. 
            // If so, the substring is a palindrome from beginning to end.
            if (st[startIndex] === st[endIndex]) {
                const remainingLength = endIndex - startIndex - 1;
                // check if the remaining string is also a palindrome
                if (remainingLength === findLPSLengthRecursive(st, startIndex + 1, endIndex - 1)) {
                    dp[startIndex][endIndex] = remainingLength + 2;
                    return dp[startIndex][endIndex];
                }
            }

            // case 2: skip one character either from the beginning or the end
            // 2. We will skip either the element from the beginning or the end to make two recursive calls for the remaining substring. 
            // The length of LPS would be the maximum of these two recursive calls.
            const c1 = findLPSLengthRecursive(st, startIndex + 1, endIndex);
            const c2 = findLPSLengthRecursive(st, startIndex, endIndex - 1);
            dp[startIndex][endIndex] = Math.max(c1, c2);
        }

        return dp[startIndex][endIndex];
    }

    return findLPSLengthRecursive(st, 0, st.length - 1);
};

console.log(`Length of LPS ---> ${findLPSLength('abdbca')}`);
console.log(`Length of LPS ---> ${findLPSLength('cddpd')}`);
console.log(`Length of LPS ---> ${findLPSLength('pqr')}`);

//if st[startIndex] == st[endIndex], and 
//        if the remaing string is of zero length or dp[startIndex+1][endIndex-1] is a palindrome then
//  dp[startIndex][endIndex] = true

let findLPSLength = function (st) {
    // dp[i][j] will be 'true' if the string from index 'i' to index 'j' is a palindrome
    const dp = Array(st.length).fill(0).map(() => Array(st.length).fill(0));

    // every string with one character is a palindrome
    for (let i = 0; i < st.length; i++) {
        dp[i][i] = true;
    }

    let maxLength = 1;
    for (let i = st.length - 1; i >= 0; i--) {
        for (let j = i + 1; j < st.length; j++) {
            if (st[i] == st[j]) {
                // if it's a two character string or if the remaining string is a palindrome too
                if (j - i == 1 || dp[i + 1][j - 1]) {
                    dp[i][j] = true;
                    maxLength = Math.max(maxLength, endIndex - startIndex + 1);
                }
            }
        }
    }
    return maxLength;
}

// Manacher's algorithm
let findLPSLength = function (st) {
    // S with a bogus character (eg. '|') inserted between each character (including outer boundaries)
    const ss = '|' + st.split('').join('|') + '|';
    // The radius of the longest palindrome centered on each place in S'
    const palindromeRadi = [];
    // note: length(S') = length(PalindromeRadii) = 2 × length(S) + 1

    let center = 0;
    let radius = 0;

    while (center < ss.length) {
        // At the start of the loop, Radius is already set to a lower-bound for the longest radius.
        // In the first iteration, Radius is 0, but it can be higher.

        // Determine the longest palindrome starting at Center-Radius and going to Center+Radius
        while (center - (radius + 1) >= 0 && center + (radius + 1) < ss.length && ss[center - (radius + 1)] == ss[center + (radius + 1)]) {
            radius = radius + 1;
        }

        // Save the radius of the longest palindrome in the array
        palindromeRadi[center] = radius;

        // Below, center is incremented.
        // If any precomputed values can be reused, they are.
        // Also, Radius may be set to value greater than 0.

        const oldCenter = center;
        const oldRadius = radius;

        center = center + 1;
        // Radius' default value will be 0, if we reach the end of the following loop.
        radius = 0;

        while (center <= oldCenter + oldRadius) {
            // Because Center lies inside the old palindrome and every character inside
            // a palindrome has a "mirrored" character reflected across its center, we
            // can use the data that was precomputed for the Center's mirrored point.
            const mirroredCenter = oldCenter - (center - oldCenter);
            const maxMirroredRadius = oldCenter + oldRadius - center;

            // The first case is when the palindrome at MirroredCenter lies completely inside the "Old" palindrome.
            // In this situation, the palindrome at Center will have the same length as the one at MirroredCenter.
            // For example, if the "Old" palindrome is "abcbpbcba", we can see that the palindrome centered on "c"
            // after the "p" must have the same length as the palindrome centered on the "c" before the "p".
            if (palindromeRadi[mirroredCenter] < maxMirroredRadius) {
                palindromeRadi[center] = palindromeRadi[mirroredCenter];
                center = center + 1;
            }
            else if (palindromeRadi[mirroredCenter] > maxMirroredRadius) {
                palindromeRadi[center] = maxMirroredRadius;
                center = center + 1;
            }
            else { // palindromeRadi[mirroedCenter] == maxMirroedRadius
                radius = maxMirroredRadius;
                break;
            }
        }


    }
    // longest palindrome in ss
    const lpss = 2 * palindromeRadi.reduce((pre, cur) => Math.max(pre, cur)) + 1;

    // longest palindrome in s
    return (lpss - 1) / 2;
}

console.log(`Length of LPS ---> ${findLPSLength('abdbca')}`);
console.log(`Length of LPS ---> ${findLPSLength('cddpd')}`);
console.log(`Length of LPS ---> ${findLPSLength('pqr')}`);
