// Given a string and a pattern, find out if the string contains any permutation of the pattern.
// Permutation is defined as the re-arranging of the characters of the string. For example, “abc” has the following six permutations:
// abc
// acb
// bac
// bca
// cab
// cba
// If a string has ‘n’ distinct characters, it will have n! permutations.

const find_permutation = function (str, pattern) {
    const patMap = {};
    let startIndex = 0, matched = 0;

    // Create a HashMap to calculate the frequencies of all characters in the pattern.
    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        if (!(char in patMap)) {
            patMap[char] = 0;
        }
        patMap[char]++;
    }

    // Our goal is to match all the characters from the 'charFrequency' with the current window
    // try to extend the range [windowStart, windowEnd]
    for (let endIndex = 0; endIndex < str.length; endIndex++) {
        const rightChar = str[endIndex];
        // Iterate through the string, adding one character at a time in the sliding window.
        if (rightChar in patMap) {
            // Decrement the frequency of matched character
            patMap[rightChar]--;
            // If the character being added matches a character in the HashMap,
            // decrement its frequency in the map. If the character frequency becomes zero, we got a complete match.
            if (patMap[rightChar] == 0) {
                matched++;
            }
        }

        // If at any time, the number of characters matched is equal to the number of distinct characters in the pattern
        // (i.e., total characters in the HashMap), we have gotten our required permutation.
        if (matched == Object.keys(patMap).length) {
            return true;
        }

        // If the window size is greater than the length of the pattern,
        // shrink the window to make it equal to the pattern’s size.
        // At the same time, if the character going out was part of the pattern, put it back in the frequency HashMap.
        if (endIndex - startIndex + 1 > pattern.length) {
            const leftChar = str[startIndex];
            if (leftChar in patMap) {
                patMap[leftChar]++;
                if (patMap[leftChar] == 1) {
                    matched--;
                }
            }
            // Shrink the sliding window
            startIndex++;
        }

    }

    return false;
};


function find_permutation(str, pattern) {
    let windowStart = 0,
        matched = 0,
        charFrequency = {};

    for (i = 0; i < pattern.length; i++) {
        const chr = pattern[i];
        if (!(chr in charFrequency)) {
            charFrequency[chr] = 0;
        }
        charFrequency[chr] += 1;
    }

    // Our goal is to match all the characters from the 'charFrequency' with the current window
    // try to extend the range [windowStart, windowEnd]
    for (windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const rightChar = str[windowEnd];
        if (rightChar in charFrequency) {
            // Decrement the frequency of matched character
            charFrequency[rightChar] -= 1;
            if (charFrequency[rightChar] === 0) {
                matched += 1;
            }
        }

        if (matched === Object.keys(charFrequency).length) {
            return true;
        }

        // Shrink the sliding window
        if (windowEnd >= pattern.length - 1) {
            leftChar = str[windowStart];
            windowStart += 1;
            if (leftChar in charFrequency) {
                if (charFrequency[leftChar] === 0) {
                    matched -= 1;
                }
                charFrequency[leftChar] += 1;
            }
        }
    }
    return false;
}


console.log(`Permutation exist: ${find_permutation('oidbcaf', 'abc')}`);
console.log(`Permutation exist: ${find_permutation('odicf', 'dc')}`);
console.log(`Permutation exist: ${find_permutation('bcdxabcdy', 'bcdyabcdx')}`);
console.log(`Permutation exist: ${find_permutation('aaacb', 'abc')}`);