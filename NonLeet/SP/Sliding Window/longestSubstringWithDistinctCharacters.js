// Given a string, find the length of the longest substring, which has all distinct characters.
const non_repeat_substring = function (str) {
    let maxLength = 0, start = 0, substring = {};

    // go through the string
    for (let i = 0; i < str.length; i++) {
        const curChar = str[i];
        // check to see if curChar is already in the map
        while (typeof substring[curChar] != 'undefined') {
            // if it is then delete from the start until it is no longer in it.
            delete substring[str[start]];
            start++;
        }
        // add curChar to the map
        substring[curChar] = i;

        // remember the maximum length so far;
        maxLength = Math.max(Object.keys(substring).length, maxLength);
    }

    return maxLength;
};

function non_repeat_substring(str) {
    let windowStart = 0,
        maxLength = 0,
        charIndexMap = {};

    // try to extend the range [windowStart, windowEnd]
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const rightChar = str[windowEnd];
        // if the map already contains the 'rightChar', shrink the window from the beginning so that
        // we have only one occurrence of 'rightChar'
        if (rightChar in charIndexMap) {
            // this is tricky; in the current window, we will not have any 'rightChar' after its previous index
            // and if 'windowStart' is already ahead of the last index of 'rightChar', we'll keep 'windowStart'
            windowStart = Math.max(windowStart, charIndexMap[rightChar] + 1);
        }
        // insert the 'rightChar' into the map
        charIndexMap[rightChar] = windowEnd;
        // remember the maximum length so far
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    return maxLength;
}


console.log(`Length of the longest substring: ${non_repeat_substring('aabccbb')}`);
console.log(`Length of the longest substring: ${non_repeat_substring('abbbb')}`);
console.log(`Length of the longest substring: ${non_repeat_substring('abccde')}`);