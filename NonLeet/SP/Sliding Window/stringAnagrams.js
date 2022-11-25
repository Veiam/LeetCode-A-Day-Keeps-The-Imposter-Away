// Given a string and a pattern, find all anagrams of the pattern in the given string.
// Every anagram is a permutation of a string. As we know, when we are not allowed to repeat characters while
// finding permutations of a string, we get N! permutations (or anagrams) of a string having  N characters.
// For example, here are the six anagrams of the string “abc”:
// abc
// acb
// bac
// bca
// cab
// cba
// Write a function to return a list of starting indices of the anagrams of the pattern in the given string.

const find_string_anagrams = function (str, pattern) {
    const result_indexes = [], patMap = [];
    let startIndex = 0, matched = 0, p = pattern.length;


    for (let i = 0; i < p; i++) {
        const char = pattern[i];
        if (!(char in patMap)) {
            patMap[char] = 0
        }
        patMap[char]++;
    }
    // our goal is to match all the characters from the 'charFrequency' with the current window
    // try to extend the range [windowStart, windowEnd]
    for (let endIndex = 0; endIndex < str.length; endIndex++) {

        const rightChar = str[endIndex];
        if (rightChar in patMap) {
            // decrement the frequency of matched character
            patMap[rightChar]--;
            if (patMap[rightChar] == 0) {
                matched++;
            }
        }

        // have we found an anagram?
        if (matched == Object.keys(patMap).length) {
            result_indexes.push(endIndex - p + 1);
        }

        // shrink the sliding window
        if (endIndex - startIndex + 1 == p) {
            const leftChar = str[startIndex];
            if (leftChar in patMap) {
                patMap[leftChar]++;
                if (patMap[leftChar] == 1) {
                    // decrement the matched count
                    matched--;
                }
            }
            startIndex++;
        }

    }

    return result_indexes;
};

console.log(find_string_anagrams('ppqp', 'pq'));
console.log(find_string_anagrams('abbcabc', 'abc'));

function find_string_anagrams(str, pattern) {
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

    const resultIndices = [];
    // our goal is to match all the characters from the 'charFrequency' with the current window
    // try to extend the range [windowStart, windowEnd]
    for (windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const rightChar = str[windowEnd];
        if (rightChar in charFrequency) {
            // decrement the frequency of matched character
            charFrequency[rightChar] -= 1;
            if (charFrequency[rightChar] === 0) {
                matched += 1;
            }
        }

        if (matched === Object.keys(charFrequency).length) { // have we found an anagram?
            resultIndices.push(windowStart);
        }

        // shrink the sliding window
        if (windowEnd >= pattern.length - 1) {
            leftChar = str[windowStart];
            windowStart += 1;
            if (leftChar in charFrequency) {
                if (charFrequency[leftChar] === 0) {
                    matched -= 1; // before putting the character back, decrement the matched count
                }
                charFrequency[leftChar] += 1; // put the character back
            }
        }
    }

    return resultIndices;
}
