// Given a string and a pattern, find the smallest substring in the given string which has all the characters of the given pattern.
const find_substring = function (str, pattern) {
    let startIndex = 0, smallest = Infinity, matched = 0;
    const patFreq = {};

    for (let pat of pattern) {
        if (!(pat in patFreq))
            patFreq[pat] = 0;
        patFreq[pat]++;
    }

    for (let i = 0; i < str.length; i++) {
        const rightChar = str[i];
        if (rightChar in patFreq) {
            // We will keep a running count of every matching instance of a character.
            patFreq[rightChar]--;
            if (patFreq[rightChar] == 0) {
                matched++;
            }
        }

        // Whenever we have matched all the characters, we will try to shrink the window from the beginning,
        // keeping track of the smallest substring that has all the matching characters.
        while (matched == Object.keys(patFreq).length) {
            smallest = Math.min(smallest, i - startIndex + 1);
            const leftChar = str[startIndex];
            if (leftChar in patFreq) {
                patFreq[leftChar]++;
                if (patFreq[leftChar] == 1) {
                    matched--;
                }
            }
            startIndex++;
        }
    }
    if (smallest < Infinity) {
        return str.substring(startIndex - 1, smallest + startIndex - 1);
    }
    return "";
}

console.log(find_substring('aabdec', 'abc'));
console.log(find_substring('abdbca', 'abc'));
console.log(find_substring('adcad', 'abc'));

function find_substring(str, pattern) {
    let windowStart = 0,
        matched = 0,
        substrStart = 0,
        minLength = str.length + 1,
        charFrequency = {};

    for (i = 0; i < pattern.length; i++) {
        const chr = pattern[i];
        if (!(chr in charFrequency)) {
            charFrequency[chr] = 0;
        }
        charFrequency[chr] += 1;
    }

    // try to extend the range [windowStart, windowEnd]
    for (windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const rightChar = str[windowEnd];
        if (rightChar in charFrequency) {
            charFrequency[rightChar] -= 1;
            if (charFrequency[rightChar] >= 0) { // Count every matching of a character
                matched += 1;
            }
        }

        // Shrink the window if we can, finish as soon as we remove a matched character
        while (matched === pattern.length) {
            if (minLength > windowEnd - windowStart + 1) {
                minLength = windowEnd - windowStart + 1;
                substrStart = windowStart;
            }

            const leftChar = str[windowStart];
            windowStart += 1;
            if (leftChar in charFrequency) {
                // Note that we could have redundant matching characters, therefore we'll decrement the
                // matched count only when a useful occurrence of a matched character is going out of the window
                if (charFrequency[leftChar] === 0) {
                    matched -= 1;
                }
                charFrequency[leftChar] += 1;
            }
        }
    }

    if (minLength > str.length) {
        return '';
    }
    return str.substring(substrStart, substrStart + minLength);
}
