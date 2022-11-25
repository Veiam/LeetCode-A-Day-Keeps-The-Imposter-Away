// Given a string, find if its letters can be rearranged in such a way that no two same characters come next to each other.

const Heap = require('../../node_modules/collections/heap');
const rearrange_string = function (str) {
    const freqMap = {};
    for (let char of str) {
        if (!(char in freqMap))
            freqMap[char] = 0;
        freqMap[char]++;
    }

    const maxHeap = new Heap([], null, (a, b) => a[0] - b[0]);
    // add all characters to the max heap
    Object.keys(freqMap).forEach((char) => {
        maxHeap.push([freqMap[char], char]);
    });

    let result = "";
    while (maxHeap.length > 1) {
        let [freq1, char1] = maxHeap.pop();
        let [freq2, char2] = maxHeap.pop();
        freq1 -= freq2;
        while (freq2 > 0) {
            result = result + char1 + char2;
            freq2--;
        }
        // add the previous entry back in the heap if its frequency is greater than zero
        if (freq1 > 0) {
            maxHeap.push([freq1, char1]);
        }
    }

    // when we only have one left in max heap
    // it should have 1 freq if not then we can't meet the rule 
    const [freq, char] = maxHeap.pop();
    if (freq > 1) {
        return "";
    }
    else {
        return result + char;
    }
};


console.log(`Rearranged string: ${rearrange_string("aappp")}`)
console.log(`Rearranged string: ${rearrange_string("Programming")}`)
console.log(`Rearranged string: ${rearrange_string("aapa")}`)

function rearrange_string(str) {
    charFrequencyMap = {};
    for (i = 0; i < str.length; i++) {
        const chr = str[i];
        if (!(chr in charFrequencyMap)) {
            charFrequencyMap[chr] = 1;
        } else {
            charFrequencyMap[chr]++;
        }
    }


    const maxHeap = new Heap([], null, ((a, b) => a[0] - b[0]));
    // add all characters to the max heap
    Object.keys(charFrequencyMap).forEach((char) => {
        maxHeap.push([charFrequencyMap[char], char]);
    });

    let previousChar = null,
        previousFrequency = 0,
        resultString = [];
    while (maxHeap.length > 0) {
        const [frequency, char] = maxHeap.pop();
        // add the previous entry back in the heap if its frequency is greater than zero
        if (previousChar !== null && previousFrequency > 0) {
            maxHeap.push([previousFrequency, previousChar]);
        }
        // append the current character to the result string and decrement its count
        resultString.push(char);
        previousChar = char;
        previousFrequency = frequency - 1; // decrement the frequency
    }

    // if we were successful in appending all the characters to the result string, return it
    if (resultString.length === str.length) {
        return resultString.join('');
    }
    return '';
}