// Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s,
// find the length of the longest contiguous subarray having all 1s.

const length_of_longest_substring = function (arr, k) {
    const substring = {};
    let maxLength = 0, startIndex = 0;

    for (let endIndex = 0; endIndex < arr.length; endIndex++) {
        const rightBit = arr[endIndex];
        if (!(rightBit in substring)) {
            substring[rightBit] = 0;
        }
        substring[rightBit]++;

        while (substring[0] > k) {
            const leftBit = arr[startIndex];
            substring[leftBit]--;
            startIndex++;
        }

        maxLength = Math.max(maxLength, endIndex - startIndex + 1);
    }

    return maxLength;
};

function length_of_longest_substring(arr, k) {
    let windowStart = 0,
        maxLength = 0,
        maxOnesCount = 0;

    // Try to extend the range [windowStart, windowEnd]
    for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        if (arr[windowEnd] === 1) {
            maxOnesCount += 1;
        }

        // Current window size is from windowStart to windowEnd, overall we have a maximum of 1s
        // repeating 'maxOnesCount' times, this means we can have a window with 'maxOnesCount' 1s
        // and the remaining are 0s which should replace with 1s.
        // now, if the remaining 0s are more than 'k', it is the time to shrink the window as we
        // are not allowed to replace more than 'k' 0s
        if ((windowEnd - windowStart + 1 - maxOnesCount) > k) {
            if (arr[windowStart] === 1) {
                maxOnesCount -= 1;
            }
            windowStart += 1;
        }

        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    return maxLength;
}


console.log(length_of_longest_substring([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2));
console.log(length_of_longest_substring([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3));